// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDemoKey-Replace-With-Your-Real-Firebase-Key",
    authDomain: "synaptic-learn.firebaseapp.com",
    projectId: "synaptic-learn",
    storageBucket: "synaptic-learn.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456789012345",
    measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

// Authentication State Management
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
        
        // Listen for authentication state changes
        auth.onAuthStateChanged(this.onAuthStateChanged);
    }
    
    async onAuthStateChanged(user) {
        this.currentUser = user;
        
        if (user) {
            // User is signed in
            console.log('User signed in:', user.displayName);
            await this.createOrUpdateUserProfile(user);
            this.updateUI(true);
            await this.loadUserProgress();
        } else {
            // User is signed out
            console.log('User signed out');
            this.updateUI(false);
        }
    }
    
    async signInWithGoogle() {
        try {
            const result = await auth.signInWithPopup(googleProvider);
            const user = result.user;
            
            // Show success notification
            showNotification(`Welcome ${user.displayName}!`, 'success');
            
            return user;
        } catch (error) {
            console.error('Sign-in error:', error);
            showNotification('Sign-in failed. Please try again.', 'error');
            throw error;
        }
    }
    
    async signOut() {
        try {
            await auth.signOut();
            showNotification('Successfully signed out.', 'info');
        } catch (error) {
            console.error('Sign-out error:', error);
            showNotification('Sign-out failed.', 'error');
        }
    }
    
    async createOrUpdateUserProfile(user) {
        const userRef = db.collection('users').doc(user.uid);
        
        try {
            const userDoc = await userRef.get();
            
            if (!userDoc.exists) {
                // Create new user profile
                await userRef.set({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
                    courseProgress: {},
                    totalHours: 0,
                    completedCourses: 0,
                    certificates: [],
                    streak: 0
                });
            } else {
                // Update last login
                await userRef.update({
                    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        } catch (error) {
            console.error('Error creating/updating user profile:', error);
        }
    }
    
    async loadUserProgress() {
        if (!this.currentUser) return;
        
        try {
            const userDoc = await db.collection('users').doc(this.currentUser.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                window.userProgress = userData.courseProgress || {};
                
                // Update progress UI
                if (window.updateProgressUI) {
                    window.updateProgressUI(userData);
                }
                if (window.updateCourseCards) {
                    window.updateCourseCards();
                }
            }
        } catch (error) {
            console.error('Error loading user progress:', error);
        }
    }
    
    async saveUserProgress(courseId, lessonNumber, completed = false) {
        if (!this.currentUser) return;
        
        const userRef = db.collection('users').doc(this.currentUser.uid);
        
        try {
            const updateData = {};
            updateData[`courseProgress.${courseId}.currentLesson`] = lessonNumber;
            updateData[`courseProgress.${courseId}.completed`] = completed;
            updateData[`courseProgress.${courseId}.lastAccessed`] = firebase.firestore.FieldValue.serverTimestamp();
            
            if (completed) {
                updateData.completedCourses = firebase.firestore.FieldValue.increment(1);
                updateData.certificates = firebase.firestore.FieldValue.arrayUnion({
                    courseId: courseId,
                    completedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    certificateId: `cert_${courseId}_${Date.now()}`
                });
            }
            
            await userRef.update(updateData);
            
            // Update local progress
            if (!window.userProgress[courseId]) {
                window.userProgress[courseId] = {};
            }
            window.userProgress[courseId].currentLesson = lessonNumber;
            window.userProgress[courseId].completed = completed;
            
        } catch (error) {
            console.error('Error saving user progress:', error);
        }
    }
    
    updateUI(isSignedIn) {
        const loginBtn = document.getElementById('login-btn');
        const userProfile = document.getElementById('user-profile');
        const progressSection = document.getElementById('progress');
        
        if (isSignedIn && this.currentUser) {
            loginBtn.style.display = 'none';
            userProfile.style.display = 'flex';
            
            document.getElementById('user-name').textContent = this.currentUser.displayName || 'User';
            document.getElementById('user-avatar').src = this.currentUser.photoURL || 'https://via.placeholder.com/35';
            
            if (progressSection) {
                progressSection.style.display = 'block';
            }
        } else {
            loginBtn.style.display = 'block';
            userProfile.style.display = 'none';
            
            if (progressSection) {
                progressSection.style.display = 'none';
            }
        }
    }
}

// Initialize Auth Manager
const authManager = new AuthManager();

// Global functions for UI interaction
window.signInWithGoogle = () => authManager.signInWithGoogle();
window.signOut = () => authManager.signOut();
window.saveProgress = (courseId, lessonNumber, completed) => authManager.saveUserProgress(courseId, lessonNumber, completed);