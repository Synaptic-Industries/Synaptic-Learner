// Clean Course Content Database - 4 Working Courses Only
const courseContent = {
    lua: {
        title: "Lua Programming Fundamentals",
        description: "Master the complete fundamentals of Lua programming for Roblox development",
        totalLessons: 25,
        estimatedHours: 20,
        chapters: [
            { title: "Getting Started with Lua", lessons: [1, 2, 3, 4, 5] },
            { title: "Data Types and Variables", lessons: [6, 7, 8, 9, 10] },
            { title: "Control Flow and Logic", lessons: [11, 12, 13, 14, 15] },
            { title: "Functions and Scope", lessons: [16, 17, 18, 19, 20] },
            { title: "Advanced Concepts", lessons: [21, 22, 23, 24, 25] }
        ],
        lessons: [
            {
                id: 1,
                title: "Introduction to Lua",
                duration: "15 min",
                content: `
                    <h1>Introduction to Lua Programming</h1>
                    <p>Welcome to the world of Lua programming! Lua is a powerful, efficient, and lightweight scripting language that serves as the backbone of Roblox game development.</p>
                    <h2>Why Learn Lua?</h2>
                    <ul>
                        <li><strong>Simple syntax:</strong> Lua's clean and readable syntax makes it perfect for beginners</li>
                        <li><strong>Powerful features:</strong> Despite its simplicity, Lua offers advanced programming concepts</li>
                        <li><strong>Roblox integration:</strong> All Roblox scripts are written in Lua</li>
                        <li><strong>Performance:</strong> Lua is one of the fastest scripting languages available</li>
                    </ul>
                    <h2>Your First Lua Program</h2>
                    <pre><code>print("Hello, Roblox!")
print("Welcome to Lua programming!")</code></pre>
                `,
                starterCode: `-- Welcome to your first Lua lesson!
print("Hello, Roblox!")
print("I'm learning Lua programming!")

-- Try adding your own print statements below:
`,
                expectedOutput: "Hello, Roblox!\nI'm learning Lua programming!",
                hints: [
                    "Use print() to display text to the output console",
                    "Text should be surrounded by quotes",
                    "Use -- to add comments to your code"
                ]
            }
        ]
    },
    ui: {
        title: "Advanced UI/UX Design",
        description: "Create stunning user interfaces and optimize user experience for Roblox games",
        totalLessons: 22,
        estimatedHours: 18,
        chapters: [
            { title: "Introduction to Roblox GUI", lessons: [1, 2, 3, 4, 5] },
            { title: "Layout and Positioning", lessons: [6, 7, 8, 9, 10] },
            { title: "Interactive Elements", lessons: [11, 12, 13, 14, 15] },
            { title: "Advanced Styling", lessons: [16, 17, 18, 19, 20] },
            { title: "Mobile and Responsive Design", lessons: [21, 22] }
        ],
        lessons: [
            {
                id: 1,
                title: "Introduction to Roblox GUI System",
                duration: "20 min",
                content: `
                    <h1>Introduction to Roblox GUI System</h1>
                    <p>User Interface (UI) design is crucial for creating engaging Roblox games. A well-designed UI enhances player experience and makes your game more professional.</p>
                    <h2>Key GUI Objects</h2>
                    <ul>
                        <li><strong>ScreenGui:</strong> The main container for all GUI elements</li>
                        <li><strong>Frame:</strong> Rectangular containers for organizing elements</li>
                        <li><strong>TextLabel:</strong> For displaying text</li>
                        <li><strong>TextButton:</strong> Interactive buttons</li>
                    </ul>
                `,
                starterCode: `-- Create your first Roblox GUI
local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "PlayerInfo"
screenGui.Parent = player.PlayerGui

-- Create main frame
local mainFrame = Instance.new("Frame")
mainFrame.Size = UDim2.new(0, 250, 0, 150)
mainFrame.Position = UDim2.new(0, 20, 0, 20)
mainFrame.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
mainFrame.Parent = screenGui

print("GUI created successfully!")
`,
                expectedOutput: "GUI created successfully!",
                hints: [
                    "Use Instance.new() to create GUI objects",
                    "Set Parent property to add objects to hierarchy",
                    "Use UDim2.new() for size and position"
                ]
            }
        ]
    },
    mechanics: {
        title: "Game Mechanics & Logic",
        description: "Learn to create engaging game mechanics, player interactions, and game systems",
        totalLessons: 20,
        estimatedHours: 16,
        chapters: [
            { title: "Introduction to Game Mechanics", lessons: [1, 2, 3, 4, 5] },
            { title: "Player Movement & Controls", lessons: [6, 7, 8, 9, 10] },
            { title: "Game Systems & Logic", lessons: [11, 12, 13, 14, 15] },
            { title: "Advanced Mechanics", lessons: [16, 17, 18, 19, 20] }
        ],
        lessons: [
            {
                id: 1,
                title: "Understanding Game Mechanics",
                duration: "15 min",
                content: `
                    <h1>Introduction to Game Mechanics</h1>
                    <p>Game mechanics are the rules and systems that govern player interactions in your game. They define what players can do, how they can do it, and what happens as a result.</p>
                    <h2>Core Game Mechanic Types</h2>
                    <ul>
                        <li><strong>Movement Mechanics:</strong> Walking, running, jumping, flying</li>
                        <li><strong>Interaction Mechanics:</strong> Collecting items, opening doors, pressing buttons</li>
                        <li><strong>Combat Mechanics:</strong> Health, damage, weapons, defense</li>
                        <li><strong>Progression Mechanics:</strong> Leveling up, unlocking content, achievements</li>
                    </ul>
                `,
                starterCode: `-- Simple Coin Collection System
local Players = game:GetService("Players")

-- Create a coin part
local coin = Instance.new("Part")
coin.Name = "Coin"
coin.Size = Vector3.new(2, 2, 0.2)
coin.Shape = Enum.PartType.Cylinder
coin.Material = Enum.Material.Neon
coin.BrickColor = BrickColor.new("Bright yellow")
coin.Anchored = true
coin.Position = Vector3.new(0, 5, 0)
coin.Parent = workspace

print("Coin created! Touch it to collect.")
`,
                expectedOutput: "Coin created! Touch it to collect.",
                hints: [
                    "Use Instance.new() to create game objects",
                    "Set properties like Size, Color, and Position",
                    "Use workspace to add objects to the game world"
                ]
            }
        ]
    },
    studio: {
        title: "Roblox Studio Mastery",
        description: "Master Roblox Studio tools, building techniques, and development workflow",
        totalLessons: 18,
        estimatedHours: 14,
        chapters: [
            { title: "Studio Interface & Basics", lessons: [1, 2, 3, 4, 5] },
            { title: "Building & Modeling", lessons: [6, 7, 8, 9, 10] },
            { title: "Scripting in Studio", lessons: [11, 12, 13, 14] },
            { title: "Publishing & Testing", lessons: [15, 16, 17, 18] }
        ],
        lessons: [
            {
                id: 1,
                title: "Studio Interface Overview",
                duration: "12 min",
                content: `
                    <h1>Roblox Studio Interface</h1>
                    <p>Roblox Studio is your complete development environment for creating Roblox games. Let's explore its key components.</p>
                    <h2>Main Interface Elements</h2>
                    <ul>
                        <li><strong>3D Viewport:</strong> Where you build and view your game world</li>
                        <li><strong>Explorer:</strong> Shows the hierarchy of all objects in your game</li>
                        <li><strong>Properties:</strong> Displays and allows editing of selected object properties</li>
                        <li><strong>Toolbox:</strong> Access to models, decals, audio, and plugins</li>
                    </ul>
                `,
                starterCode: `-- Welcome to Studio Scripting!
local Workspace = game:GetService("Workspace")
local Players = game:GetService("Players")

print("Welcome to Roblox Studio!")
print("You are learning to use Studio's scripting environment.")

-- Create a simple part
local part = Instance.new("Part")
part.Name = "StudioTestPart"
part.Size = Vector3.new(4, 1, 4)
part.Position = Vector3.new(0, 5, 0)
part.BrickColor = BrickColor.new("Bright green")
part.Parent = Workspace

print("Created a test part in the workspace!")
`,
                expectedOutput: "Welcome to Roblox Studio!\nYou are learning to use Studio's scripting environment.",
                hints: [
                    "Use print() statements to see output in Studio's Output window",
                    "game:GetService() gets important game services",
                    "Instance.new() creates new objects"
                ]
            }
        ]
    }
};

// Export for use in learning environment
window.courseContent = courseContent;