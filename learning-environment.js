// Learning Environment Controller
class LearningEnvironment {
    constructor() {
        this.editor = null;
        this.currentCourse = null;
        this.currentLesson = 1;
        this.userProgress = {};
        
        this.initializeEnvironment();
    }
    
    async initializeEnvironment() {
        // Get course info from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        this.currentCourse = urlParams.get('course') || 'lua';
        this.currentLesson = parseInt(urlParams.get('lesson') || '1');
        
        // Update loading message
        this.updateLoadingMessage('Loading course data...');
        
        // Load course data
        await this.loadCourseData();
        
        // Update loading message
        this.updateLoadingMessage('Setting up code editor...');
        
        // Initialize Monaco Editor
        await this.initializeMonacoEditor();
        
        // Update loading message
        this.updateLoadingMessage('Preparing interactive environment...');
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Load current lesson
        this.loadLesson(this.currentLesson);
        
        // Hide loading and show content
        document.getElementById('content-loading').style.display = 'none';
        document.getElementById('lesson-content').style.display = 'block';
    }
    
    updateLoadingMessage(message) {
        const loadingDetail = document.getElementById('loading-detail');
        if (loadingDetail) {
            loadingDetail.textContent = message;
        }
    }
    
    async loadCourseData() {
        if (!window.courseContent || !window.courseContent[this.currentCourse]) {
            showNotification('Course not found!', 'error');
            return;
        }
        
        const course = window.courseContent[this.currentCourse];
        
        // Update course header
        document.getElementById('course-title').textContent = course.title;
        
        // Build lessons sidebar
        this.buildLessonsSidebar(course);
        
        // Load user progress from localStorage
        window.userProgress = this.loadProgressFromStorage();
    }
    
    buildLessonsSidebar(course) {
        const lessonsList = document.getElementById('lessons-list');
        lessonsList.innerHTML = '';
        
        course.chapters.forEach(chapter => {
            // Chapter header
            const chapterDiv = document.createElement('div');
            chapterDiv.className = 'lesson-chapter';
            chapterDiv.textContent = chapter.title;
            lessonsList.appendChild(chapterDiv);
            
            // Chapter lessons
            chapter.lessons.forEach(lessonId => {
                const lesson = course.lessons.find(l => l.id === lessonId);
                if (!lesson) return;
                
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                lessonItem.dataset.lessonId = lessonId;
                
                if (lessonId === this.currentLesson) {
                    lessonItem.classList.add('active');
                }
                
                // Check if completed
                if (this.isLessonCompleted(lessonId)) {
                    lessonItem.classList.add('completed');
                }
                
                lessonItem.innerHTML = `
                    <div class="lesson-status">
                        ${this.isLessonCompleted(lessonId) ? '✓' : lessonId}
                    </div>
                    <div class="lesson-info">
                        <div class="lesson-name">${lesson.title}</div>
                        <div class="lesson-duration">${lesson.duration}</div>
                    </div>
                `;
                
                lessonItem.addEventListener('click', () => {
                    this.loadLesson(lessonId);
                });
                
                lessonsList.appendChild(lessonItem);
            });
        });
    }
    
    isLessonCompleted(lessonId) {
        if (!window.userProgress || !window.userProgress[this.currentCourse]) {
            return false;
        }
        
        const courseProgress = window.userProgress[this.currentCourse];
        return courseProgress.currentLesson >= lessonId;
    }
    
    async initializeMonacoEditor() {
        // Show loading message
        document.getElementById('monaco-editor').innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#888;"><i class="fas fa-spinner fa-spin" style="margin-right:10px;"></i>Loading code editor...</div>';
        
        return new Promise((resolve) => {
            // Use faster CDN with timeout
            require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.45.0/min/vs' } });
            
            // Set timeout for loading
            const timeout = setTimeout(() => {
                console.warn('Monaco Editor taking long to load, using fallback');
                this.createFallbackEditor();
                resolve();
            }, 10000); // 10 second timeout
            
            require(['vs/editor/editor.main'], () => {
                clearTimeout(timeout);
                // Register Lua language
                monaco.languages.register({ id: 'lua' });
                
                // Define Lua tokens
                monaco.languages.setMonarchTokensProvider('lua', {
                    tokenizer: {
                        root: [
                            [/--.*$/, 'comment'],
                            [/\b(and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, 'keyword'],
                            [/\b(print|pairs|ipairs|next|type|getmetatable|setmetatable|rawget|rawset|tostring|tonumber|string|table|math|os|io|game)\b/, 'support.function'],
                            [/"([^"\\]|\\.)*$/, 'string.invalid'],
                            [/"/, 'string', '@string_double'],
                            [/'/, 'string', '@string_single'],
                            [/\d+(\.\d+)?/, 'number'],
                            [/[{}()\[\]]/, 'bracket'],
                            [/[<>=!~]=?/, 'operator'],
                            [/[+\-*\/^%#]/, 'operator'],
                            [/[a-zA-Z_]\w*/, 'identifier']
                        ],
                        string_double: [
                            [/[^\\"]+/, 'string'],
                            [/\\./, 'string.escape'],
                            [/"/, 'string', '@pop']
                        ],
                        string_single: [
                            [/[^\\']+/, 'string'],
                            [/\\./, 'string.escape'],
                            [/'/, 'string', '@pop']
                        ]
                    }
                });
                
                // Create the editor
                this.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
                    value: '-- Loading...',
                    language: 'lua',
                    theme: 'vs-dark',
                    fontSize: 14,
                    lineNumbers: 'on',
                    minimap: { enabled: true },
                    wordWrap: 'on',
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    tabSize: 4,
                    insertSpaces: true,
                    renderWhitespace: 'selection'
                });
                
                resolve();
            });
        });
    }
    
    createFallbackEditor() {
        // Create a simple textarea fallback if Monaco fails to load
        const editorContainer = document.getElementById('monaco-editor');
        editorContainer.innerHTML = `
            <textarea id="fallback-editor" style="
                width: 100%;
                height: 100%;
                background: #1e1e1e;
                color: #d4d4d4;
                border: none;
                font-family: 'Fira Code', 'Consolas', monospace;
                font-size: 14px;
                padding: 10px;
                resize: none;
                outline: none;
            ">-- Loading...</textarea>
        `;
        
        this.editor = {
            getValue: () => document.getElementById('fallback-editor').value,
            setValue: (value) => document.getElementById('fallback-editor').value = value,
            layout: () => {} // No-op for fallback
        };
        
        showNotification('Using simplified editor - Monaco Editor failed to load', 'warning');
    }
    
    loadLesson(lessonId) {
        const course = window.courseContent[this.currentCourse];
        const lesson = course.lessons.find(l => l.id === lessonId);
        
        if (!lesson) {
            showNotification('Lesson not found!', 'error');
            return;
        }
        
        this.currentLesson = lessonId;
        
        // Update active lesson in sidebar
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.lessonId) === lessonId) {
                item.classList.add('active');
            }
        });
        
        // Update lesson content
        document.getElementById('lesson-content').innerHTML = lesson.content;
        document.getElementById('current-lesson-title').textContent = lesson.title;
        
        // Update code editor
        if (this.editor) {
            this.editor.setValue(lesson.starterCode || '-- Start coding here!\n');
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update progress bar
        this.updateProgressBar();
        
        // Clear output
        this.clearOutput();
        
        // Update URL without reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lesson', lessonId);
        window.history.replaceState({}, '', newUrl);
    }
    
    updateNavigationButtons() {
        const course = window.courseContent[this.currentCourse];
        const prevBtn = document.getElementById('prev-lesson');
        const nextBtn = document.getElementById('next-lesson');
        const completeBtn = document.getElementById('complete-lesson');
        
        // Previous button
        prevBtn.disabled = this.currentLesson <= 1;
        
        // Next button
        nextBtn.disabled = this.currentLesson >= course.totalLessons;
        
        // Complete button (show on last lesson)
        if (this.currentLesson >= course.totalLessons) {
            nextBtn.style.display = 'none';
            completeBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            completeBtn.style.display = 'none';
        }
    }
    
    updateProgressBar() {
        const course = window.courseContent[this.currentCourse];
        const progressPercent = (this.currentLesson / course.totalLessons) * 100;
        document.getElementById('course-progress-fill').style.width = progressPercent + '%';
    }
    
    setupEventListeners() {
        // Navigation buttons
        document.getElementById('prev-lesson').addEventListener('click', () => {
            if (this.currentLesson > 1) {
                this.loadLesson(this.currentLesson - 1);
            }
        });
        
        document.getElementById('next-lesson').addEventListener('click', () => {
            const course = window.courseContent[this.currentCourse];
            if (this.currentLesson < course.totalLessons) {
                this.markLessonCompleted(this.currentLesson);
                this.loadLesson(this.currentLesson + 1);
            }
        });
        
        document.getElementById('complete-lesson').addEventListener('click', () => {
            this.completeCourse();
        });
        
        // Editor actions
        document.getElementById('run-code').addEventListener('click', () => {
            this.runCode();
        });
        
        document.getElementById('test-code').addEventListener('click', () => {
            this.testCode();
        });
        
        document.getElementById('reset-code').addEventListener('click', () => {
            this.resetCode();
        });
        
        document.getElementById('clear-output').addEventListener('click', () => {
            this.clearOutput();
        });
        
        // Toolbar actions
        document.getElementById('save-progress').addEventListener('click', () => {
            this.saveProgress();
        });
        
        document.getElementById('toggle-editor').addEventListener('click', () => {
            this.toggleEditor();
        });
        
        // Window resize handler for responsive layout
        window.addEventListener('resize', () => {
            this.handleResize();
        });
        
        // Initial responsive setup
        this.handleResize();
    }
    
    runCode() {
        const code = this.editor.getValue();
        this.addToOutput('Running code...', 'info');
        
        try {
            // Create a mock Lua environment for basic execution
            const result = this.executeLuaCode(code);
            if (result.length > 0) {
                result.forEach(line => this.addToOutput(line, 'success'));
            } else {
                this.addToOutput('Code executed successfully (no output)', 'success');
            }
        } catch (error) {
            this.addToOutput(`Error: ${error.message}`, 'error');
        }
    }
    
    executeLuaCode(code) {
        // Simple Lua interpreter for basic operations
        const output = [];
        const printFunction = (text) => output.push(String(text));
        
        // Replace print statements with our custom function
        let jsCode = code
            .replace(/--.*$/gm, '') // Remove comments
            .replace(/local\s+/g, 'let ') // Replace local with let
            .replace(/print\s*\(/g, 'printFunction(') // Replace print
            .replace(/\.\./g, '+') // Replace concatenation
            .replace(/~=/g, '!=') // Replace not equal
            .replace(/\band\b/g, '&&') // Replace and
            .replace(/\bor\b/g, '||') // Replace or
            .replace(/\bnot\b/g, '!') // Replace not
            .replace(/\bnil\b/g, 'null'); // Replace nil
        
        // Execute the transformed code
        try {
            const func = new Function('printFunction', 'math', jsCode);
            func(printFunction, Math);
        } catch (error) {
            throw new Error('Code execution failed: ' + error.message);
        }
        
        return output;
    }
    
    testCode() {
        const course = window.courseContent[this.currentCourse];
        const lesson = course.lessons.find(l => l.id === this.currentLesson);
        
        if (!lesson.expectedOutput) {
            showNotification('No test available for this lesson', 'warning');
            return;
        }
        
        const code = this.editor.getValue();
        this.addToOutput('Testing your code...', 'info');
        
        try {
            const result = this.executeLuaCode(code);
            const actualOutput = result.join('\n');
            
            if (actualOutput.includes(lesson.expectedOutput) || actualOutput === lesson.expectedOutput) {
                this.addToOutput('✅ Test passed! Great work!', 'success');
                this.markLessonCompleted(this.currentLesson);
                showNotification('Lesson completed successfully!', 'success');
            } else {
                this.addToOutput('❌ Test failed. Expected output:', 'error');
                this.addToOutput(lesson.expectedOutput, 'info');
                this.addToOutput('Your output:', 'info');
                this.addToOutput(actualOutput, 'info');
            }
        } catch (error) {
            this.addToOutput(`Test failed: ${error.message}`, 'error');
        }
    }
    
    resetCode() {
        const course = window.courseContent[this.currentCourse];
        const lesson = course.lessons.find(l => l.id === this.currentLesson);
        
        if (lesson.starterCode) {
            this.editor.setValue(lesson.starterCode);
            this.addToOutput('Code reset to starter template', 'info');
        }
    }
    
    addToOutput(text, type = 'normal') {
        const outputContent = document.getElementById('output-content');
        const line = document.createElement('div');
        line.className = `output-line ${type}`;
        line.textContent = text;
        outputContent.appendChild(line);
        outputContent.scrollTop = outputContent.scrollHeight;
    }
    
    clearOutput() {
        document.getElementById('output-content').innerHTML = `
            <div class="output-line info">Output console cleared</div>
            <div class="output-line">Write your code and click "Run" to see the results.</div>
        `;
    }
    
    markLessonCompleted(lessonId) {
        // Update local progress
        if (!window.userProgress) window.userProgress = {};
        if (!window.userProgress[this.currentCourse]) window.userProgress[this.currentCourse] = {};
        
        window.userProgress[this.currentCourse].currentLesson = Math.max(
            window.userProgress[this.currentCourse].currentLesson || 0,
            lessonId
        );
        
        // Save to localStorage
        this.saveProgressToStorage();
        
        // Update sidebar
        this.buildLessonsSidebar(window.courseContent[this.currentCourse]);
    }
    
    async completeCourse() {
        this.markLessonCompleted(this.currentLesson);
        
        // Mark course as completed
        if (window.userProgress && window.userProgress[this.currentCourse]) {
            window.userProgress[this.currentCourse].completed = true;
        }
        
        // Save to localStorage
        this.saveProgressToStorage();
        
        showNotification('🎉 Congratulations! You completed the course!', 'success');
        
        // Show completion modal or redirect
        setTimeout(() => {
            if (confirm('Course completed! Would you like to return to the main page?')) {
                window.location.href = 'index.html';
            }
        }, 2000);
    }
    
    saveProgress() {
        this.markLessonCompleted(this.currentLesson);
        this.saveProgressToStorage();
        showNotification('Progress saved locally!', 'success');
    }
    
    saveProgressToStorage() {
        localStorage.setItem('synaptic-learn-progress', JSON.stringify(window.userProgress));
    }
    
    loadProgressFromStorage() {
        const stored = localStorage.getItem('synaptic-learn-progress');
        return stored ? JSON.parse(stored) : {};
    }
    
    toggleEditor() {
        const editorPanel = document.getElementById('editor-panel');
        const lessonPanel = document.getElementById('lesson-panel');
        const toggleBtn = document.getElementById('toggle-editor');
        
        if (window.innerWidth <= 1024) {
            if (editorPanel.classList.contains('active')) {
                editorPanel.classList.remove('active');
                lessonPanel.style.display = 'block';
                toggleBtn.innerHTML = '<i class="fas fa-code"></i> Show Editor';
            } else {
                editorPanel.classList.add('active');
                lessonPanel.style.display = 'none';
                toggleBtn.innerHTML = '<i class="fas fa-book"></i> Show Lesson';
                
                // Trigger editor resize
                if (this.editor) {
                    setTimeout(() => this.editor.layout(), 100);
                }
            }
        }
    }
    
    handleResize() {
        const editorPanel = document.getElementById('editor-panel');
        const lessonPanel = document.getElementById('lesson-panel');
        const toggleBtn = document.getElementById('toggle-editor');
        
        if (window.innerWidth > 1024) {
            // Desktop view - show both panels
            editorPanel.classList.remove('active');
            editorPanel.style.display = 'flex';
            lessonPanel.style.display = 'block';
            toggleBtn.innerHTML = '<i class="fas fa-code"></i> Show Editor';
        } else {
            // Mobile/tablet view - only show lesson by default
            if (!editorPanel.classList.contains('active')) {
                editorPanel.style.display = 'none';
                lessonPanel.style.display = 'block';
                toggleBtn.innerHTML = '<i class="fas fa-code"></i> Show Editor';
            }
        }
        
        // Trigger editor layout update
        if (this.editor) {
            setTimeout(() => this.editor.layout(), 100);
        }
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.learningEnvironment = new LearningEnvironment();
});

// Export for global access
window.showNotification = showNotification;