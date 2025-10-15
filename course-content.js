// Clean Course Content Database - 4 Working Courses Only
const courseContent = {
    lua: {
        title: "Lua Programming Fundamentals",
        description: "Master the complete fundamentals of Lua programming for Roblox development",
        totalLessons: 12,
        estimatedHours: 15,
        chapters: [
            { title: "Getting Started with Lua", lessons: [1, 2, 3, 4, 5] },
            { title: "Control Flow & Functions", lessons: [6, 7, 8, 9] },
            { title: "Advanced Concepts", lessons: [10, 11, 12] }
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
            },
            {
                id: 2,
                title: "Variables and Data Types",
                duration: "18 min",
                content: `
                    <h1>Variables and Data Types in Lua</h1>
                    <p>Variables are containers for storing data values. Lua has several basic data types that you need to understand.</p>
                    <h2>Basic Data Types</h2>
                    <ul>
                        <li><strong>String:</strong> Text data enclosed in quotes</li>
                        <li><strong>Number:</strong> Numeric values (integers and decimals)</li>
                        <li><strong>Boolean:</strong> true or false values</li>
                        <li><strong>nil:</strong> Represents no value or null</li>
                    </ul>
                    <h2>Creating Variables</h2>
                    <pre><code>local playerName = "Alice"
local playerAge = 25
local isOnline = true</code></pre>
                `,
                starterCode: `-- Create variables with different data types
local playerName = "John"
local playerLevel = 10
local hasWeapon = true
local score = nil

-- Print the variables
print("Player Name:", playerName)
print("Player Level:", playerLevel)
print("Has Weapon:", hasWeapon)
print("Score:", score)
`,
                expectedOutput: "Player Name: John\nPlayer Level: 10\nHas Weapon: true\nScore: nil",
                hints: [
                    "Use 'local' keyword to declare variables",
                    "Strings must be in quotes",
                    "Numbers don't need quotes"
                ]
            },
            {
                id: 3,
                title: "Basic Math Operations",
                duration: "12 min",
                content: `
                    <h1>Math Operations in Lua</h1>
                    <p>Lua supports all basic mathematical operations and more. Let's explore how to perform calculations.</p>
                    <h2>Basic Operators</h2>
                    <ul>
                        <li><strong>+</strong> Addition</li>
                        <li><strong>-</strong> Subtraction</li>
                        <li><strong>*</strong> Multiplication</li>
                        <li><strong>/</strong> Division</li>
                        <li><strong>^</strong> Exponentiation</li>
                        <li><strong>%</strong> Modulus (remainder)</li>
                    </ul>
                `,
                starterCode: `-- Basic math operations
local a = 15
local b = 4

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
`,
                expectedOutput: "Addition: 19\nSubtraction: 11\nMultiplication: 60\nDivision: 3.75",
                hints: [
                    "Use + for addition",
                    "Use - for subtraction",
                    "Use * for multiplication"
                ]
            },
            {
                id: 4,
                title: "String Manipulation",
                duration: "16 min",
                content: `
                    <h1>Working with Strings</h1>
                    <p>Strings are sequences of characters. Lua provides many ways to work with and manipulate strings.</p>
                    <h2>String Concatenation</h2>
                    <p>Use .. to join strings together:</p>
                    <pre><code>local firstName = "John"
local lastName = "Doe"
local fullName = firstName .. " " .. lastName</code></pre>
                `,
                starterCode: `-- String manipulation
local greeting = "Hello"
local name = "Player"
local message = greeting .. ", " .. name .. "!"

print(message)
print("Message length:", string.len(message))
`,
                expectedOutput: "Hello, Player!\nMessage length: 14",
                hints: [
                    "Use .. to concatenate strings",
                    "string.len() returns string length",
                    "Don't forget spaces between words"
                ]
            },
            {
                id: 5,
                title: "Conditional Statements",
                duration: "20 min",
                content: `
                    <h1>If Statements and Conditions</h1>
                    <p>Conditional statements allow your code to make decisions based on different conditions.</p>
                    <h2>Basic If Statement</h2>
                    <pre><code>if condition then
    -- code to execute
end</code></pre>
                    <h2>If-Else Statement</h2>
                    <pre><code>if condition then
    -- code if true
else
    -- code if false
end</code></pre>
                `,
                starterCode: `-- Conditional statements
local playerHealth = 75
local maxHealth = 100

if playerHealth > 50 then
    print("Player is healthy")
else
    print("Player needs healing")
end

if playerHealth == maxHealth then
    print("Player at full health")
end
`,
                expectedOutput: "Player is healthy",
                hints: [
                    "Use 'if then end' for conditions",
                    "Use == to compare for equality",
                    "Use > < for comparisons"
                ]
            },
            {
                id: 6,
                title: "Loops - For and While",
                duration: "22 min",
                content: `
                    <h1>Loops in Lua</h1>
                    <p>Loops allow you to execute code repeatedly. Lua supports several types of loops to handle different scenarios.</p>
                    <h2>For Loop</h2>
                    <p>Perfect for when you know how many times to repeat:</p>
                    <pre><code>for i = 1, 5 do
    print("Count:", i)
end</code></pre>
                    <h2>While Loop</h2>
                    <p>Repeats while a condition is true:</p>
                    <pre><code>local count = 1
while count <= 3 do
    print("Loop:", count)
    count = count + 1
end</code></pre>
                `,
                starterCode: `-- Practice with loops
local playerExp = 0
local levelUpExp = 100

-- For loop to simulate gaining experience
for battle = 1, 5 do
    local expGained = battle * 10
    playerExp = playerExp + expGained
    print("Battle", battle, "- Gained", expGained, "exp. Total:", playerExp)
end

-- While loop to check level ups
local level = 1
while playerExp >= levelUpExp do
    level = level + 1
    playerExp = playerExp - levelUpExp
    print("Level up! Now level", level)
end

print("Final level:", level, "Remaining exp:", playerExp)
`,
                expectedOutput: "Battle 1 - Gained 10 exp. Total: 10\nBattle 2 - Gained 20 exp. Total: 30\nBattle 3 - Gained 30 exp. Total: 60\nBattle 4 - Gained 40 exp. Total: 100\nBattle 5 - Gained 50 exp. Total: 150\nLevel up! Now level 2\nFinal level: 2\nRemaining exp: 50",
                hints: [
                    "For loops: for variable = start, end do",
                    "While loops: while condition do",
                    "Don't forget to update the condition in while loops"
                ]
            },
            {
                id: 7,
                title: "Functions and Parameters",
                duration: "25 min",
                content: `
                    <h1>Functions in Lua</h1>
                    <p>Functions are reusable blocks of code that perform specific tasks. They help organize your code and avoid repetition.</p>
                    <h2>Creating Functions</h2>
                    <pre><code>function greetPlayer(name)
    return "Hello, " .. name .. "!"
end</code></pre>
                    <h2>Functions with Multiple Parameters</h2>
                    <pre><code>function calculateDamage(baseDamage, multiplier, armor)
    local finalDamage = (baseDamage * multiplier) - armor
    return math.max(0, finalDamage)
end</code></pre>
                `,
                starterCode: `-- Create and use functions
function calculateHealth(currentHealth, damage, armor)
    local actualDamage = damage - armor
    if actualDamage < 0 then
        actualDamage = 0
    end
    return currentHealth - actualDamage
end

function displayPlayerStats(name, health, level)
    return string.format("%s - Level %d - Health: %d HP", name, level, health)
end

-- Use the functions
local playerHealth = 100
local incomingDamage = 25
local playerArmor = 5

playerHealth = calculateHealth(playerHealth, incomingDamage, playerArmor)
print("After taking damage:")
print(displayPlayerStats("Warrior", playerHealth, 3))

-- Test with different values
playerHealth = calculateHealth(playerHealth, 15, 10)
print(displayPlayerStats("Warrior", playerHealth, 3))
`,
                expectedOutput: "After taking damage:\nWarrior - Level 3 - Health: 80 HP\nWarrior - Level 3 - Health: 75 HP",
                hints: [
                    "Use 'function' keyword to define functions",
                    "Parameters go inside parentheses",
                    "Use 'return' to send values back"
                ]
            },
            {
                id: 8,
                title: "Tables - Arrays and Dictionaries",
                duration: "28 min",
                content: `
                    <h1>Tables in Lua</h1>
                    <p>Tables are Lua's most powerful data structure. They can function as arrays, dictionaries, or both!</p>
                    <h2>Arrays (Numerical Indices)</h2>
                    <pre><code>local weapons = {"Sword", "Bow", "Staff", "Dagger"}
print(weapons[1]) -- Prints "Sword"</code></pre>
                    <h2>Dictionaries (String Indices)</h2>
                    <pre><code>local player = {
    name = "Alice",
    level = 15,
    health = 100
}
print(player.name) -- Prints "Alice"</code></pre>
                `,
                starterCode: `-- Working with tables
-- Array of player inventory
local inventory = {"Health Potion", "Magic Sword", "Shield", "Gold Ring"}

-- Dictionary of player stats
local playerStats = {
    name = "Hero",
    level = 10,
    health = 150,
    mana = 75,
    experience = 2500
}

-- Print inventory
print("Player Inventory:")
for i = 1, #inventory do
    print(i .. ":", inventory[i])
end

-- Print player stats
print("\nPlayer Stats:")
print("Name:", playerStats.name)
print("Level:", playerStats.level)
print("Health:", playerStats.health)
print("Mana:", playerStats.mana)

-- Add new item to inventory
inventory[#inventory + 1] = "Rare Gem"
print("\nAdded new item:", inventory[5])
`,
                expectedOutput: "Player Inventory:\n1: Health Potion\n2: Magic Sword\n3: Shield\n4: Gold Ring\n\nPlayer Stats:\nName: Hero\nLevel: 10\nHealth: 150\nMana: 75\n\nAdded new item: Rare Gem",
                hints: [
                    "Use {} to create tables",
                    "Arrays use numbers: table[1], table[2]",
                    "Dictionaries use strings: table.key or table['key']"
                ]
            },
            {
                id: 9,
                title: "Table Iteration and ipairs",
                duration: "20 min",
                content: `
                    <h1>Iterating Through Tables</h1>
                    <p>Learn different ways to loop through tables and access their contents efficiently.</p>
                    <h2>Using ipairs for Arrays</h2>
                    <pre><code>local items = {"Sword", "Potion", "Key"}
for index, value in ipairs(items) do
    print(index, value)
end</code></pre>
                    <h2>Using pairs for Dictionaries</h2>
                    <pre><code>local stats = {health = 100, mana = 50}
for key, value in pairs(stats) do
    print(key, "=", value)
end</code></pre>
                `,
                starterCode: `-- Iterate through different table types
local questItems = {"Ancient Key", "Magic Crystal", "Dragon Scale", "Holy Water"}
local playerAttributes = {
    strength = 25,
    agility = 18,
    intelligence = 30,
    luck = 12
}

-- Iterate through quest items (array)
print("Quest Items:")
for index, item in ipairs(questItems) do
    print(string.format("Slot %d: %s", index, item))
end

-- Calculate total attribute points
local totalPoints = 0
print("\nPlayer Attributes:")
for attribute, value in pairs(playerAttributes) do
    print(attribute .. ":", value)
    totalPoints = totalPoints + value
end

print("\nTotal Attribute Points:", totalPoints)

-- Find the highest attribute
local highestValue = 0
local bestAttribute = ""
for attribute, value in pairs(playerAttributes) do
    if value > highestValue then
        highestValue = value
        bestAttribute = attribute
    end
end

print("Strongest attribute:", bestAttribute, "(", highestValue, ")")
`,
                expectedOutput: "Quest Items:\nSlot 1: Ancient Key\nSlot 2: Magic Crystal\nSlot 3: Dragon Scale\nSlot 4: Holy Water\n\nPlayer Attributes:\nstrength: 25\nagility: 18\nintelligence: 30\nluck: 12\n\nTotal Attribute Points: 85\nStrongest attribute: intelligence ( 30 )",
                hints: [
                    "Use ipairs() for arrays with numeric indices",
                    "Use pairs() for dictionaries or mixed tables",
                    "ipairs stops at the first nil value"
                ]
            },
            {
                id: 10,
                title: "Error Handling with pcall",
                duration: "18 min",
                content: `
                    <h1>Error Handling in Lua</h1>
                    <p>Learn to handle errors gracefully using pcall (protected call) to prevent your scripts from crashing.</p>
                    <h2>Basic Error Handling</h2>
                    <pre><code>local success, result = pcall(function()
    -- Code that might fail
    return someRiskyFunction()
end)

if success then
    print("Success:", result)
else
    print("Error:", result)
end</code></pre>
                `,
                starterCode: `-- Error handling with pcall
function divideNumbers(a, b)
    if b == 0 then
        error("Cannot divide by zero!")
    end
    return a / b
end

function accessInventorySlot(inventory, slot)
    if slot < 1 or slot > #inventory then
        error("Invalid inventory slot: " .. slot)
    end
    return inventory[slot]
end

-- Test with safe division
local numbers = {{10, 2}, {15, 3}, {8, 0}, {20, 4}}

for i, pair in ipairs(numbers) do
    local success, result = pcall(divideNumbers, pair[1], pair[2])
    if success then
        print(string.format("%d ÷ %d = %.2f", pair[1], pair[2], result))
    else
        print(string.format("Error with %d ÷ %d: %s", pair[1], pair[2], result))
    end
end

-- Test inventory access
local inventory = {"Sword", "Potion", "Shield"}
local slotsToTest = {1, 2, 5, 3}

print("\nInventory Access Tests:")
for _, slot in ipairs(slotsToTest) do
    local success, result = pcall(accessInventorySlot, inventory, slot)
    if success then
        print(string.format("Slot %d: %s", slot, result))
    else
        print(string.format("Slot %d: %s", slot, result))
    end
end
`,
                expectedOutput: "10 ÷ 2 = 5.00\n15 ÷ 3 = 5.00\nError with 8 ÷ 0: Cannot divide by zero!\n20 ÷ 4 = 5.00\n\nInventory Access Tests:\nSlot 1: Sword\nSlot 2: Potion\nSlot 5: Invalid inventory slot: 5\nSlot 3: Shield",
                hints: [
                    "pcall returns success (boolean) and result/error message",
                    "Use error() function to throw custom errors",
                    "Always check the success boolean before using the result"
                ]
            },
            {
                id: 11,
                title: "Metatables and Metamethods",
                duration: "30 min",
                content: `
                    <h1>Metatables in Lua</h1>
                    <p>Metatables allow you to customize table behavior and create powerful abstractions. They're essential for advanced Lua programming.</p>
                    <h2>Basic Metatable</h2>
                    <pre><code>local mt = {
    __add = function(a, b)
        return a.value + b.value
    end
}

local obj = {value = 10}
setmetatable(obj, mt)</code></pre>
                    <h2>Common Metamethods</h2>
                    <ul>
                        <li><strong>__index:</strong> Called when accessing missing keys</li>
                        <li><strong>__newindex:</strong> Called when setting new keys</li>
                        <li><strong>__add, __sub, __mul:</strong> Arithmetic operations</li>
                        <li><strong>__tostring:</strong> Custom string representation</li>
                    </ul>
                `,
                starterCode: `-- Create a Vector class using metatables
local Vector = {}
Vector.__index = Vector

-- Constructor
function Vector.new(x, y)
    local self = setmetatable({}, Vector)
    self.x = x or 0
    self.y = y or 0
    return self
end

-- Metamethods for arithmetic
function Vector.__add(a, b)
    return Vector.new(a.x + b.x, a.y + b.y)
end

function Vector.__sub(a, b)
    return Vector.new(a.x - b.x, a.y - b.y)
end

function Vector.__mul(a, scalar)
    if type(scalar) == "number" then
        return Vector.new(a.x * scalar, a.y * scalar)
    end
    return Vector.new(a.x * scalar.x, a.y * scalar.y)
end

-- Custom string representation
function Vector.__tostring(v)
    return string.format("Vector(%.1f, %.1f)", v.x, v.y)
end

-- Method to calculate length
function Vector:length()
    return math.sqrt(self.x * self.x + self.y * self.y)
end

-- Create and test vectors
local v1 = Vector.new(3, 4)
local v2 = Vector.new(1, 2)

print("Vector 1:", tostring(v1))
print("Vector 2:", tostring(v2))
print("Addition:", tostring(v1 + v2))
print("Subtraction:", tostring(v1 - v2))
print("Multiply by 2:", tostring(v1 * 2))
print("V1 Length:", string.format("%.2f", v1:length()))
`,
                expectedOutput: "Vector 1: Vector(3.0, 4.0)\nVector 2: Vector(1.0, 2.0)\nAddition: Vector(4.0, 6.0)\nSubtraction: Vector(2.0, 2.0)\nMultiply by 2: Vector(6.0, 8.0)\nV1 Length: 5.00",
                hints: [
                    "setmetatable(table, metatable) assigns a metatable",
                    "__index allows method calls on tables",
                    "Metamethods start with double underscores"
                ]
            },
            {
                id: 12,
                title: "Modules and Code Organization",
                duration: "25 min",
                content: `
                    <h1>Creating Modules in Lua</h1>
                    <p>Modules help you organize code into reusable components. They're essential for larger Roblox projects.</p>
                    <h2>Basic Module Structure</h2>
                    <pre><code>-- MathUtils module
local MathUtils = {}

function MathUtils.clamp(value, min, max)
    return math.max(min, math.min(max, value))
end

return MathUtils</code></pre>
                    <h2>Using Modules</h2>
                    <pre><code>local MathUtils = require(script.MathUtils)
local result = MathUtils.clamp(150, 0, 100)</code></pre>
                `,
                starterCode: `-- Create a PlayerUtils module
local PlayerUtils = {}

-- Calculate level from experience
function PlayerUtils.calculateLevel(experience)
    return math.floor(experience / 1000) + 1
end

-- Calculate experience needed for next level
function PlayerUtils.expToNextLevel(experience)
    local currentLevel = PlayerUtils.calculateLevel(experience)
    local nextLevelExp = currentLevel * 1000
    return nextLevelExp - experience
end

-- Format health bar
function PlayerUtils.formatHealthBar(health, maxHealth, barLength)
    barLength = barLength or 20
    local ratio = health / maxHealth
    local filledBars = math.floor(ratio * barLength)
    local emptyBars = barLength - filledBars
    
    local bar = string.rep("█", filledBars) .. string.rep("░", emptyBars)
    return string.format("%s %d/%d HP", bar, health, maxHealth)
end

-- Simulate player data
local players = {
    {name = "Warrior", exp = 2500, health = 80, maxHealth = 120},
    {name = "Mage", exp = 4200, health = 45, maxHealth = 60},
    {name = "Archer", exp = 1800, health = 100, maxHealth = 100}
}

print("=== Player Status Report ===")
for _, player in ipairs(players) do
    local level = PlayerUtils.calculateLevel(player.exp)
    local expNeeded = PlayerUtils.expToNextLevel(player.exp)
    local healthBar = PlayerUtils.formatHealthBar(player.health, player.maxHealth, 15)
    
    print(string.format("%s (Level %d)", player.name, level))
    print("  " .. healthBar)
    print(string.format("  EXP: %d (Need %d for next level)", player.exp, expNeeded))
    print()
end
`,
                expectedOutput: "=== Player Status Report ===\nWarrior (Level 3)\n  ███████████░░░░ 80/120 HP\n  EXP: 2500 (Need 500 for next level)\n\nMage (Level 5)\n  ███████████░░░░ 45/60 HP\n  EXP: 4200 (Need 800 for next level)\n\nArcher (Level 2)\n  ███████████████ 100/100 HP\n  EXP: 1800 (Need 200 for next level)",
                hints: [
                    "Modules are tables that contain functions and data",
                    "Use 'return' at the end of modules to export them",
                    "Group related functions together in modules"
                ]
            }
        ]
    },
    ui: {
        title: "Advanced UI/UX Design",
        description: "Create stunning user interfaces and optimize user experience for Roblox games",
        totalLessons: 8,
        estimatedHours: 12,
        chapters: [
            { title: "GUI Fundamentals", lessons: [1, 2, 3] },
            { title: "Interactive Elements", lessons: [4, 5, 6] },
            { title: "Advanced UI Design", lessons: [7, 8] }
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
                    <h2>UI Preview</h2>
                    <p>The code will create a GUI that looks like this:</p>
                    <div style="border: 2px solid #3b82f6; border-radius: 8px; padding: 15px; background: #1a1a2e; margin: 15px 0;">
                        <div style="background: #323232; width: 250px; height: 150px; border-radius: 6px; padding: 10px; color: white; font-family: Arial;">
                            <div style="text-align: center; padding-top: 50px;">PlayerInfo GUI Frame</div>
                            <div style="text-align: center; font-size: 12px; color: #888; margin-top: 10px;">250x150 pixels</div>
                        </div>
                        <p style="margin-top: 10px; font-size: 14px; color: #888;">Preview: Dark gray frame positioned at top-left of screen</p>
                    </div>
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
print("ScreenGui Name:", screenGui.Name)
`,
                expectedOutput: "GUI created successfully!\nScreenGui Name: PlayerInfo",
                hints: [
                    "Use Instance.new() to create GUI objects",
                    "Set Parent property to add objects to hierarchy",
                    "Use UDim2.new() for size and position"
                ]
            },
            {
                id: 2,
                title: "Text Labels and Styling",
                duration: "22 min",
                content: `
                    <h1>Working with TextLabels</h1>
                    <p>TextLabels are used to display non-interactive text in your GUI. Learn how to style them professionally.</p>
                    <h2>TextLabel Properties</h2>
                    <ul>
                        <li><strong>Text:</strong> The content to display</li>
                        <li><strong>TextColor3:</strong> Color of the text</li>
                        <li><strong>TextSize:</strong> Size of the font</li>
                        <li><strong>Font:</strong> Font family (Enum.Font)</li>
                        <li><strong>TextScaled:</strong> Auto-scale text to fit</li>
                    </ul>
                `,
                starterCode: `-- Create styled text labels
local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "StyledUI"
screenGui.Parent = player.PlayerGui

-- Main container frame
local mainFrame = Instance.new("Frame")
mainFrame.Size = UDim2.new(0, 300, 0, 200)
mainFrame.Position = UDim2.new(0.5, -150, 0.5, -100)
mainFrame.BackgroundColor3 = Color3.fromRGB(30, 30, 40)
mainFrame.BorderSizePixel = 0
mainFrame.Parent = screenGui

-- Title label
local titleLabel = Instance.new("TextLabel")
titleLabel.Size = UDim2.new(1, 0, 0, 40)
titleLabel.Position = UDim2.new(0, 0, 0, 10)
titleLabel.BackgroundTransparency = 1
titleLabel.Text = "Player Dashboard"
titleLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
titleLabel.TextSize = 24
titleLabel.Font = Enum.Font.SourceSansBold
titleLabel.Parent = mainFrame

-- Stats label
local statsLabel = Instance.new("TextLabel")
statsLabel.Size = UDim2.new(1, -20, 0, 30)
statsLabel.Position = UDim2.new(0, 10, 0, 60)
statsLabel.BackgroundTransparency = 1
statsLabel.Text = "Level: 15 | Health: 100/100 | Coins: 2,500"
statsLabel.TextColor3 = Color3.fromRGB(100, 200, 100)
statsLabel.TextSize = 16
statsLabel.Font = Enum.Font.SourceSans
statsLabel.Parent = mainFrame

-- Status label
local statusLabel = Instance.new("TextLabel")
statusLabel.Size = UDim2.new(1, -20, 1, -120)
statusLabel.Position = UDim2.new(0, 10, 0, 100)
statusLabel.BackgroundColor3 = Color3.fromRGB(20, 20, 25)
statusLabel.BorderSizePixel = 0
statusLabel.Text = "Ready for adventure!\nClick 'Play' to begin your quest."
statusLabel.TextColor3 = Color3.fromRGB(200, 200, 200)
statusLabel.TextSize = 14
statusLabel.Font = Enum.Font.SourceSans
statusLabel.TextWrapped = true
statusLabel.Parent = mainFrame

print("Styled GUI created with multiple text elements")
print("Title:", titleLabel.Text)
`,
                expectedOutput: "Styled GUI created with multiple text elements\nTitle: Player Dashboard",
                hints: [
                    "Use Color3.fromRGB() for custom colors",
                    "Set TextWrapped = true for multi-line text",
                    "BackgroundTransparency = 1 makes backgrounds invisible"
                ]
            },
            {
                id: 3,
                title: "Positioning and Sizing with UDim2",
                duration: "25 min",
                content: `
                    <h1>Understanding UDim2</h1>
                    <p>UDim2 is Roblox's system for positioning and sizing GUI elements. Master this for responsive designs.</p>
                    <h2>UDim2 Structure</h2>
                    <pre><code>UDim2.new(scaleX, offsetX, scaleY, offsetY)
-- Scale: 0-1 (percentage of parent)
-- Offset: pixel values</code></pre>
                    <h2>Common Patterns</h2>
                    <ul>
                        <li><strong>Center:</strong> UDim2.new(0.5, -width/2, 0.5, -height/2)</li>
                        <li><strong>Full width:</strong> UDim2.new(1, 0, 0, height)</li>
                        <li><strong>Responsive:</strong> Mix scale and offset values</li>
                    </ul>
                `,
                starterCode: `-- Demonstrate different positioning techniques
local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "PositioningDemo"
screenGui.Parent = player.PlayerGui

-- Top bar (full width, fixed height)
local topBar = Instance.new("Frame")
topBar.Size = UDim2.new(1, 0, 0, 50)  -- Full width, 50px height
topBar.Position = UDim2.new(0, 0, 0, 0)  -- Top-left corner
topBar.BackgroundColor3 = Color3.fromRGB(60, 60, 80)
topBar.BorderSizePixel = 0
topBar.Parent = screenGui

-- Center panel (percentage-based)
local centerPanel = Instance.new("Frame")
centerPanel.Size = UDim2.new(0.6, 0, 0.5, 0)  -- 60% width, 50% height
centerPanel.Position = UDim2.new(0.2, 0, 0.25, 0)  -- Centered with margins
centerPanel.BackgroundColor3 = Color3.fromRGB(40, 40, 50)
centerPanel.BorderSizePixel = 0
centerPanel.Parent = screenGui

-- Bottom-right corner button (fixed size, anchored to corner)
local cornerButton = Instance.new("Frame")
cornerButton.Size = UDim2.new(0, 100, 0, 40)  -- Fixed 100x40 pixels
cornerButton.Position = UDim2.new(1, -110, 1, -50)  -- 10px margin from bottom-right
cornerButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
cornerButton.BorderSizePixel = 0
cornerButton.Parent = screenGui

-- Side panel (percentage height, fixed width)
local sidePanel = Instance.new("Frame")
sidePanel.Size = UDim2.new(0, 150, 1, -60)  -- 150px width, full height minus margins
sidePanel.Position = UDim2.new(0, 10, 0, 60)  -- Left side with margins
sidePanel.BackgroundColor3 = Color3.fromRGB(50, 50, 60)
sidePanel.BorderSizePixel = 0
sidePanel.Parent = screenGui

-- Add labels to identify each element
local function addLabel(parent, text, color)
    local label = Instance.new("TextLabel")
    label.Size = UDim2.new(1, 0, 1, 0)
    label.BackgroundTransparency = 1
    label.Text = text
    label.TextColor3 = color or Color3.fromRGB(255, 255, 255)
    label.TextSize = 14
    label.Font = Enum.Font.SourceSansBold
    label.Parent = parent
end

addLabel(topBar, "Top Bar (Full Width)")
addLabel(centerPanel, "Center Panel (60% x 50%)")
addLabel(cornerButton, "Corner Button (Fixed)")
addLabel(sidePanel, "Side Panel (Mixed)")

print("Positioning demo created with 4 different techniques")
print("Top bar size:", tostring(topBar.Size))
print("Center panel position:", tostring(centerPanel.Position))
`,
                expectedOutput: "Positioning demo created with 4 different techniques\nTop bar size: {1, 0}, {0, 50}\nCenter panel position: {0.2, 0}, {0.25, 0}",
                hints: [
                    "Scale values (0-1) are percentages of parent size",
                    "Offset values are fixed pixel amounts",
                    "Negative offsets can anchor elements to opposite sides"
                ]
            },
            {
                id: 4,
                title: "Interactive Buttons and Events",
                duration: "28 min",
                content: `
                    <h1>Creating Interactive Buttons</h1>
                    <p>TextButtons allow players to interact with your GUI. Learn to handle clicks and create engaging interactions.</p>
                    <h2>Button Events</h2>
                    <ul>
                        <li><strong>MouseButton1Click:</strong> Left mouse click</li>
                        <li><strong>MouseEnter:</strong> Cursor enters button area</li>
                        <li><strong>MouseLeave:</strong> Cursor leaves button area</li>
                        <li><strong>MouseButton1Down:</strong> Mouse button pressed down</li>
                        <li><strong>MouseButton1Up:</strong> Mouse button released</li>
                    </ul>
                `,
                starterCode: `-- Create interactive button system
local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "InteractiveButtons"
screenGui.Parent = player.PlayerGui

-- Counter variable
local clickCount = 0
local coinsCount = 100

-- Main container
local container = Instance.new("Frame")
container.Size = UDim2.new(0, 400, 0, 300)
container.Position = UDim2.new(0.5, -200, 0.5, -150)
container.BackgroundColor3 = Color3.fromRGB(35, 35, 45)
container.BorderSizePixel = 0
container.Parent = screenGui

-- Title
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 40)
title.Position = UDim2.new(0, 0, 0, 10)
title.BackgroundTransparency = 1
title.Text = "Interactive Button Demo"
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = 20
title.Font = Enum.Font.SourceSansBold
title.Parent = container

-- Click counter display
local counterLabel = Instance.new("TextLabel")
counterLabel.Size = UDim2.new(1, -20, 0, 30)
counterLabel.Position = UDim2.new(0, 10, 0, 60)
counterLabel.BackgroundTransparency = 1
counterLabel.Text = "Clicks: 0 | Coins: 100"
counterLabel.TextColor3 = Color3.fromRGB(100, 200, 255)
counterLabel.TextSize = 16
counterLabel.Font = Enum.Font.SourceSans
counterLabel.Parent = container

-- Function to update counter display
local function updateCounter()
    counterLabel.Text = string.format("Clicks: %d | Coins: %d", clickCount, coinsCount)
end

-- Create animated click button
local clickButton = Instance.new("TextButton")
clickButton.Size = UDim2.new(0, 150, 0, 50)
clickButton.Position = UDim2.new(0, 30, 0, 110)
clickButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
clickButton.Text = "Click Me!"
clickButton.TextColor3 = Color3.fromRGB(255, 255, 255)
clickButton.TextSize = 18
clickButton.Font = Enum.Font.SourceSansBold
clickButton.BorderSizePixel = 0
clickButton.Parent = container

-- Shop button
local shopButton = Instance.new("TextButton")
shopButton.Size = UDim2.new(0, 120, 0, 50)
shopButton.Position = UDim2.new(0, 210, 0, 110)
shopButton.BackgroundColor3 = Color3.fromRGB(200, 150, 50)
shopButton.Text = "Buy Upgrade\n(50 coins)"
shopButton.TextColor3 = Color3.fromRGB(255, 255, 255)
shopButton.TextSize = 14
shopButton.Font = Enum.Font.SourceSansBold
shopButton.BorderSizePixel = 0
shopButton.Parent = container

-- Reset button
local resetButton = Instance.new("TextButton")
resetButton.Size = UDim2.new(0, 100, 0, 30)
resetButton.Position = UDim2.new(0, 150, 0, 250)
resetButton.BackgroundColor3 = Color3.fromRGB(150, 50, 50)
resetButton.Text = "Reset"
resetButton.TextColor3 = Color3.fromRGB(255, 255, 255)
resetButton.TextSize = 14
resetButton.Font = Enum.Font.SourceSans
resetButton.BorderSizePixel = 0
resetButton.Parent = container

-- Button event handlers
clickButton.MouseButton1Click:Connect(function()
    clickCount = clickCount + 1
    coinsCount = coinsCount + 5
    updateCounter()
    
    -- Animate button press
    clickButton.BackgroundColor3 = Color3.fromRGB(80, 120, 80)
    wait(0.1)
    clickButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
end)

shopButton.MouseButton1Click:Connect(function()
    if coinsCount >= 50 then
        coinsCount = coinsCount - 50
        updateCounter()
        -- Visual feedback
        shopButton.Text = "Purchased!"
        wait(1)
        shopButton.Text = "Buy Upgrade\n(50 coins)"
    else
        shopButton.Text = "Not enough\ncoins!"
        wait(1)
        shopButton.Text = "Buy Upgrade\n(50 coins)"
    end
end)

resetButton.MouseButton1Click:Connect(function()
    clickCount = 0
    coinsCount = 100
    updateCounter()
end)

-- Hover effects
clickButton.MouseEnter:Connect(function()
    clickButton.BackgroundColor3 = Color3.fromRGB(120, 170, 120)
end)

clickButton.MouseLeave:Connect(function()
    clickButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
end)

print("Interactive button system created")
print("Initial coins:", coinsCount)
`,
                expectedOutput: "Interactive button system created\nInitial coins: 100",
                hints: [
                    "Connect events using the :Connect() method",
                    "Use wait() for simple delays and animations",
                    "Store variables outside functions to persist state"
                ]
            },
            {
                id: 5,
                title: "Text Input and User Data",
                duration: "24 min",
                content: `
                    <h1>TextBox for User Input</h1>
                    <p>TextBox elements allow players to enter text and data. Learn to validate and process user input safely.</p>
                    <h2>TextBox Properties</h2>
                    <ul>
                        <li><strong>Text:</strong> Current text content</li>
                        <li><strong>PlaceholderText:</strong> Hint text when empty</li>
                        <li><strong>ClearTextOnFocus:</strong> Clear text when clicked</li>
                        <li><strong>TextEditable:</strong> Whether text can be modified</li>
                        <li><strong>MaxVisibleGraphemes:</strong> Character limit</li>
                    </ul>
                `,
                starterCode: `-- Create text input system
local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "TextInputDemo"
screenGui.Parent = player.PlayerGui

-- Main container
local container = Instance.new("Frame")
container.Size = UDim2.new(0, 450, 0, 350)
container.Position = UDim2.new(0.5, -225, 0.5, -175)
container.BackgroundColor3 = Color3.fromRGB(40, 40, 50)
container.BorderSizePixel = 0
container.Parent = screenGui

-- Title
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 40)
title.Position = UDim2.new(0, 0, 0, 10)
title.BackgroundTransparency = 1
title.Text = "Player Registration Form"
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = 20
title.Font = Enum.Font.SourceSansBold
title.Parent = container

-- Player name input
local nameLabel = Instance.new("TextLabel")
nameLabel.Size = UDim2.new(0, 100, 0, 30)
nameLabel.Position = UDim2.new(0, 20, 0, 70)
nameLabel.BackgroundTransparency = 1
nameLabel.Text = "Player Name:"
nameLabel.TextColor3 = Color3.fromRGB(200, 200, 200)
nameLabel.TextSize = 14
nameLabel.Font = Enum.Font.SourceSans
nameLabel.TextXAlignment = Enum.TextXAlignment.Left
nameLabel.Parent = container

local nameInput = Instance.new("TextBox")
nameInput.Size = UDim2.new(0, 200, 0, 30)
nameInput.Position = UDim2.new(0, 130, 0, 70)
nameInput.BackgroundColor3 = Color3.fromRGB(60, 60, 70)
nameInput.BorderSizePixel = 1
nameInput.BorderColor3 = Color3.fromRGB(100, 100, 120)
nameInput.Text = ""
nameInput.PlaceholderText = "Enter your character name"
nameInput.TextColor3 = Color3.fromRGB(255, 255, 255)
nameInput.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
nameInput.TextSize = 14
nameInput.Font = Enum.Font.SourceSans
nameInput.Parent = container

-- Age input (numbers only)
local ageLabel = Instance.new("TextLabel")
ageLabel.Size = UDim2.new(0, 100, 0, 30)
ageLabel.Position = UDim2.new(0, 20, 0, 120)
ageLabel.BackgroundTransparency = 1
ageLabel.Text = "Age:"
ageLabel.TextColor3 = Color3.fromRGB(200, 200, 200)
ageLabel.TextSize = 14
ageLabel.Font = Enum.Font.SourceSans
ageLabel.TextXAlignment = Enum.TextXAlignment.Left
ageLabel.Parent = container

local ageInput = Instance.new("TextBox")
ageInput.Size = UDim2.new(0, 80, 0, 30)
ageInput.Position = UDim2.new(0, 130, 0, 120)
ageInput.BackgroundColor3 = Color3.fromRGB(60, 60, 70)
ageInput.BorderSizePixel = 1
ageInput.BorderColor3 = Color3.fromRGB(100, 100, 120)
ageInput.Text = ""
ageInput.PlaceholderText = "18"
ageInput.TextColor3 = Color3.fromRGB(255, 255, 255)
ageInput.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
ageInput.TextSize = 14
ageInput.Font = Enum.Font.SourceSans
ageInput.Parent = container

-- Bio input (multi-line)
local bioLabel = Instance.new("TextLabel")
bioLabel.Size = UDim2.new(0, 100, 0, 30)
bioLabel.Position = UDim2.new(0, 20, 0, 170)
bioLabel.BackgroundTransparency = 1
bioLabel.Text = "Bio:"
bioLabel.TextColor3 = Color3.fromRGB(200, 200, 200)
bioLabel.TextSize = 14
bioLabel.Font = Enum.Font.SourceSans
bioLabel.TextXAlignment = Enum.TextXAlignment.Left
bioLabel.Parent = container

local bioInput = Instance.new("TextBox")
bioInput.Size = UDim2.new(0, 280, 0, 80)
bioInput.Position = UDim2.new(0, 130, 0, 170)
bioInput.BackgroundColor3 = Color3.fromRGB(60, 60, 70)
bioInput.BorderSizePixel = 1
bioInput.BorderColor3 = Color3.fromRGB(100, 100, 120)
bioInput.Text = ""
bioInput.PlaceholderText = "Tell us about your character..."
bioInput.TextColor3 = Color3.fromRGB(255, 255, 255)
bioInput.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
bioInput.TextSize = 12
bioInput.Font = Enum.Font.SourceSans
bioInput.TextWrapped = true
bioInput.MultiLine = true
bioInput.Parent = container

-- Submit button
local submitButton = Instance.new("TextButton")
submitButton.Size = UDim2.new(0, 120, 0, 40)
submitButton.Position = UDim2.new(0, 165, 0, 280)
submitButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
submitButton.BorderSizePixel = 0
submitButton.Text = "Submit"
submitButton.TextColor3 = Color3.fromRGB(255, 255, 255)
submitButton.TextSize = 16
submitButton.Font = Enum.Font.SourceSansBold
submitButton.Parent = container

-- Result display
local resultLabel = Instance.new("TextLabel")
resultLabel.Size = UDim2.new(1, -40, 0, 60)
resultLabel.Position = UDim2.new(0, 20, 1, -80)
resultLabel.BackgroundColor3 = Color3.fromRGB(30, 30, 35)
resultLabel.BorderSizePixel = 0
resultLabel.Text = "Fill out the form and click Submit"
resultLabel.TextColor3 = Color3.fromRGB(150, 150, 150)
resultLabel.TextSize = 12
resultLabel.Font = Enum.Font.SourceSans
resultLabel.TextWrapped = true
resultLabel.Parent = container

-- Input validation and submission
submitButton.MouseButton1Click:Connect(function()
    local name = nameInput.Text:gsub("^%s*(.-)%s*$", "%1") -- Trim whitespace
    local age = tonumber(ageInput.Text)
    local bio = bioInput.Text:gsub("^%s*(.-)%s*$", "%1")
    
    -- Validate inputs
    local errors = {}
    
    if name == "" or #name < 2 then
        table.insert(errors, "Name must be at least 2 characters")
    end
    
    if not age or age < 13 or age > 100 then
        table.insert(errors, "Age must be between 13 and 100")
    end
    
    if bio == "" or #bio < 10 then
        table.insert(errors, "Bio must be at least 10 characters")
    end
    
    -- Display results
    if #errors > 0 then
        resultLabel.Text = "Errors:\n" .. table.concat(errors, "\n")
        resultLabel.TextColor3 = Color3.fromRGB(255, 100, 100)
    else
        local summary = string.format("Profile Created!\nName: %s\nAge: %d\nBio: %s", 
            name, age, bio:sub(1, 50) .. (bio:len() > 50 and "..." or ""))
        resultLabel.Text = summary
        resultLabel.TextColor3 = Color3.fromRGB(100, 255, 100)
        
        print("Player profile submitted:")
        print("Name:", name)
        print("Age:", age)
        print("Bio length:", bio:len(), "characters")
    end
end)

-- Age input filter (numbers only)
ageInput.Changed:Connect(function(property)
    if property == "Text" then
        local text = ageInput.Text
        local filteredText = text:gsub("[^%d]", "") -- Remove non-digits
        if text ~= filteredText then
            ageInput.Text = filteredText
        end
    end
end)

print("Text input form created with validation")
print("Form has name, age, and bio fields")
`,
                expectedOutput: "Text input form created with validation\nForm has name, age, and bio fields",
                hints: [
                    "Use PlaceholderText to guide users",
                    "Validate input data before processing",
                    "Use Changed event to filter input in real-time"
                ]
            },
            {
                id: 6,
                title: "Scrolling Frames and Dynamic Content",
                duration: "26 min",
                content: `
                    <h1>ScrollingFrame for Large Content</h1>
                    <p>ScrollingFrames allow you to display more content than fits in the visible area. Perfect for inventories, chat, and lists.</p>
                    <h2>ScrollingFrame Properties</h2>
                    <ul>
                        <li><strong>CanvasSize:</strong> Total size of scrollable content</li>
                        <li><strong>ScrollBarThickness:</strong> Width of scroll bar</li>
                        <li><strong>ScrollingEnabled:</strong> Whether scrolling is allowed</li>
                        <li><strong>TopImage, MidImage, BottomImage:</strong> Custom scrollbar images</li>
                    </ul>
                `,
                starterCode: `-- Create scrollable inventory system
local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "ScrollingInventory"
screenGui.Parent = player.PlayerGui

-- Main container
local container = Instance.new("Frame")
container.Size = UDim2.new(0, 500, 0, 400)
container.Position = UDim2.new(0.5, -250, 0.5, -200)
container.BackgroundColor3 = Color3.fromRGB(45, 45, 55)
container.BorderSizePixel = 0
container.Parent = screenGui

-- Title
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 40)
title.Position = UDim2.new(0, 0, 0, 0)
title.BackgroundColor3 = Color3.fromRGB(35, 35, 45)
title.BorderSizePixel = 0
title.Text = "Player Inventory - 45 Items"
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = 18
title.Font = Enum.Font.SourceSansBold
title.Parent = container

-- Scrolling frame for inventory items
local scrollFrame = Instance.new("ScrollingFrame")
scrollFrame.Size = UDim2.new(1, -10, 1, -50)
scrollFrame.Position = UDim2.new(0, 5, 0, 45)
scrollFrame.BackgroundColor3 = Color3.fromRGB(35, 35, 40)
scrollFrame.BorderSizePixel = 1
scrollFrame.BorderColor3 = Color3.fromRGB(70, 70, 80)
scrollFrame.ScrollBarThickness = 8
scrollFrame.Parent = container

-- Sample inventory items
local inventoryItems = {
    {name = "Iron Sword", rarity = "Common", value = 50, description = "A sturdy iron blade"},
    {name = "Health Potion", rarity = "Common", value = 25, description = "Restores 50 HP"},
    {name = "Magic Staff", rarity = "Rare", value = 200, description = "Channel magical energy"},
    {name = "Dragon Scale", rarity = "Epic", value = 500, description = "Scales from an ancient dragon"},
    {name = "Bread", rarity = "Common", value = 5, description = "Simple food item"},
    {name = "Crystal Gem", rarity = "Rare", value = 150, description = "Glowing magical crystal"},
    {name = "Steel Armor", rarity = "Uncommon", value = 120, description = "Protective steel plating"},
    {name = "Wizard Hat", rarity = "Rare", value = 180, description = "Increases magical power"},
    {name = "Healing Herb", rarity = "Common", value = 15, description = "Natural healing ingredient"},
    {name = "Ancient Scroll", rarity = "Epic", value = 750, description = "Contains forgotten knowledge"},
    {name = "Silver Coin", rarity = "Common", value = 1, description = "Standard currency"},
    {name = "Fire Gem", rarity = "Rare", value = 300, description = "Contains fire magic"},
    {name = "Ice Shard", rarity = "Uncommon", value = 80, description = "Frozen magical fragment"},
    {name = "Golden Ring", rarity = "Epic", value = 600, description = "Ornate golden jewelry"},
    {name = "Wooden Shield", rarity = "Common", value = 35, description = "Basic protective equipment"}
}

-- Colors for different rarities
local rarityColors = {
    Common = Color3.fromRGB(150, 150, 150),
    Uncommon = Color3.fromRGB(100, 255, 100),
    Rare = Color3.fromRGB(100, 150, 255),
    Epic = Color3.fromRGB(200, 100, 255)
}

-- Create item entries
local itemHeight = 60
local itemSpacing = 5
local totalHeight = (#inventoryItems * (itemHeight + itemSpacing)) - itemSpacing

-- Set canvas size to fit all items
scrollFrame.CanvasSize = UDim2.new(0, 0, 0, totalHeight)

-- Function to create item frame
local function createItemFrame(item, index)
    local itemFrame = Instance.new("Frame")
    itemFrame.Size = UDim2.new(1, -10, 0, itemHeight)
    itemFrame.Position = UDim2.new(0, 5, 0, (index - 1) * (itemHeight + itemSpacing))
    itemFrame.BackgroundColor3 = Color3.fromRGB(50, 50, 60)
    itemFrame.BorderSizePixel = 1
    itemFrame.BorderColor3 = rarityColors[item.rarity]
    itemFrame.Parent = scrollFrame
    
    -- Item name
    local nameLabel = Instance.new("TextLabel")
    nameLabel.Size = UDim2.new(0.4, 0, 0.5, 0)
    nameLabel.Position = UDim2.new(0, 10, 0, 5)
    nameLabel.BackgroundTransparency = 1
    nameLabel.Text = item.name
    nameLabel.TextColor3 = rarityColors[item.rarity]
    nameLabel.TextSize = 14
    nameLabel.Font = Enum.Font.SourceSansBold
    nameLabel.TextXAlignment = Enum.TextXAlignment.Left
    nameLabel.Parent = itemFrame
    
    -- Rarity and value
    local infoLabel = Instance.new("TextLabel")
    infoLabel.Size = UDim2.new(0.3, 0, 0.5, 0)
    infoLabel.Position = UDim2.new(0.4, 0, 0, 5)
    infoLabel.BackgroundTransparency = 1
    infoLabel.Text = string.format("%s | %dg", item.rarity, item.value)
    infoLabel.TextColor3 = Color3.fromRGB(200, 200, 200)
    infoLabel.TextSize = 12
    infoLabel.Font = Enum.Font.SourceSans
    infoLabel.TextXAlignment = Enum.TextXAlignment.Left
    infoLabel.Parent = itemFrame
    
    -- Description
    local descLabel = Instance.new("TextLabel")
    descLabel.Size = UDim2.new(1, -20, 0.4, 0)
    descLabel.Position = UDim2.new(0, 10, 0.5, 0)
    descLabel.BackgroundTransparency = 1
    descLabel.Text = item.description
    descLabel.TextColor3 = Color3.fromRGB(160, 160, 160)
    descLabel.TextSize = 11
    descLabel.Font = Enum.Font.SourceSans
    descLabel.TextXAlignment = Enum.TextXAlignment.Left
    descLabel.Parent = itemFrame
    
    -- Action button
    local actionButton = Instance.new("TextButton")
    actionButton.Size = UDim2.new(0, 60, 0, 25)
    actionButton.Position = UDim2.new(1, -70, 0, 18)
    actionButton.BackgroundColor3 = Color3.fromRGB(80, 80, 100)
    actionButton.BorderSizePixel = 0
    actionButton.Text = "Use"
    actionButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    actionButton.TextSize = 12
    actionButton.Font = Enum.Font.SourceSans
    actionButton.Parent = itemFrame
    
    -- Button click handler
    actionButton.MouseButton1Click:Connect(function()
        print(string.format("Used item: %s (%s, %dg)", item.name, item.rarity, item.value))
        actionButton.Text = "Used!"
        actionButton.BackgroundColor3 = Color3.fromRGB(100, 150, 100)
        wait(1)
        actionButton.Text = "Use"
        actionButton.BackgroundColor3 = Color3.fromRGB(80, 80, 100)
    end)
end

-- Create all inventory items
for index, item in ipairs(inventoryItems) do
    createItemFrame(item, index)
end

-- Add search functionality
local searchBox = Instance.new("TextBox")
searchBox.Size = UDim2.new(0.7, 0, 0, 25)
searchBox.Position = UDim2.new(0, 10, 0, 15)
searchBox.BackgroundColor3 = Color3.fromRGB(60, 60, 70)
searchBox.BorderSizePixel = 1
searchBox.BorderColor3 = Color3.fromRGB(100, 100, 120)
searchBox.PlaceholderText = "Search items..."
searchBox.Text = ""
searchBox.TextColor3 = Color3.fromRGB(255, 255, 255)
searchBox.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
searchBox.TextSize = 12
searchBox.Font = Enum.Font.SourceSans
searchBox.Parent = title

-- Search functionality
searchBox.Changed:Connect(function(property)
    if property == "Text" then
        local searchTerm = searchBox.Text:lower()
        for i, child in ipairs(scrollFrame:GetChildren()) do
            if child:IsA("Frame") then
                local nameLabel = child:FindFirstChild("TextLabel")
                if nameLabel then
                    local itemName = nameLabel.Text:lower()
                    child.Visible = searchTerm == "" or itemName:find(searchTerm, 1, true) ~= nil
                end
            end
        end
    end
end)

print("Scrollable inventory created with", #inventoryItems, "items")
print("Total content height:", totalHeight, "pixels")
print("Includes search functionality")
`,
                expectedOutput: "Scrollable inventory created with 15 items\nTotal content height: 890 pixels\nIncludes search functionality",
                hints: [
                    "Set CanvasSize larger than the frame to enable scrolling",
                    "Position items using absolute coordinates within the canvas",
                    "Use :GetChildren() to access dynamically created elements"
                ]
            },
            {
                id: 7,
                title: "Animations with TweenService",
                duration: "30 min",
                content: `
                    <h1>GUI Animations with TweenService</h1>
                    <p>TweenService creates smooth animations for your GUI elements. Learn to create professional-looking transitions and effects.</p>
                    <h2>TweenInfo Parameters</h2>
                    <ul>
                        <li><strong>Time:</strong> Duration of the animation</li>
                        <li><strong>EasingStyle:</strong> How the animation progresses (Linear, Quad, Cubic, etc.)</li>
                        <li><strong>EasingDirection:</strong> In, Out, or InOut</li>
                        <li><strong>RepeatCount:</strong> How many times to repeat (-1 for infinite)</li>
                        <li><strong>Reverses:</strong> Whether to reverse the animation</li>
                    </ul>
                `,
                starterCode: `-- Create animated GUI system
local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local player = Players.LocalPlayer

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "AnimationDemo"
screenGui.Parent = player.PlayerGui

-- Main container
local container = Instance.new("Frame")
container.Size = UDim2.new(0, 600, 0, 450)
container.Position = UDim2.new(0.5, -300, 0.5, -225)
container.BackgroundColor3 = Color3.fromRGB(40, 40, 50)
container.BorderSizePixel = 0
container.Parent = screenGui

-- Title with slide-in animation
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 50)
title.Position = UDim2.new(-1, 0, 0, 10) -- Start off-screen
title.BackgroundColor3 = Color3.fromRGB(60, 60, 80)
title.BorderSizePixel = 0
title.Text = "GUI Animation Showcase"
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = 20
title.Font = Enum.Font.SourceSansBold
title.Parent = container

-- Animate title sliding in
local titleTween = TweenService:Create(
    title,
    TweenInfo.new(0.8, Enum.EasingStyle.Back, Enum.EasingDirection.Out),
    {Position = UDim2.new(0, 0, 0, 10)}
)
titleTween:Play()

-- Bouncing button
local bounceButton = Instance.new("TextButton")
bounceButton.Size = UDim2.new(0, 150, 0, 50)
bounceButton.Position = UDim2.new(0, 50, 0, 80)
bounceButton.BackgroundColor3 = Color3.fromRGB(100, 150, 255)
bounceButton.BorderSizePixel = 0
bounceButton.Text = "Bounce Me!"
bounceButton.TextColor3 = Color3.fromRGB(255, 255, 255)
bounceButton.TextSize = 16
bounceButton.Font = Enum.Font.SourceSansBold
bounceButton.Parent = container

-- Bounce animation for button
local bounceUp = TweenService:Create(
    bounceButton,
    TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
    {Position = UDim2.new(0, 50, 0, 60)}
)

local bounceDown = TweenService:Create(
    bounceButton,
    TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.In),
    {Position = UDim2.new(0, 50, 0, 80)}
)

bounceButton.MouseButton1Click:Connect(function()
    bounceUp:Play()
    bounceUp.Completed:Connect(function()
        bounceDown:Play()
    end)
end)

-- Rotating element
local rotateFrame = Instance.new("Frame")
rotateFrame.Size = UDim2.new(0, 80, 0, 80)
rotateFrame.Position = UDim2.new(0, 250, 0, 80)
rotateFrame.BackgroundColor3 = Color3.fromRGB(255, 100, 100)
rotateFrame.BorderSizePixel = 0
rotateFrame.AnchorPoint = Vector2.new(0.5, 0.5)
rotateFrame.Parent = container

-- Continuous rotation
local rotationTween = TweenService:Create(
    rotateFrame,
    TweenInfo.new(2, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1),
    {Rotation = 360}
)
rotationTween:Play()

-- Pulsing health bar
local healthBarBG = Instance.new("Frame")
healthBarBG.Size = UDim2.new(0, 200, 0, 20)
healthBarBG.Position = UDim2.new(0, 50, 0, 180)
healthBarBG.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
healthBarBG.BorderSizePixel = 1
healthBarBG.BorderColor3 = Color3.fromRGB(100, 100, 100)
healthBarBG.Parent = container

local healthBar = Instance.new("Frame")
healthBar.Size = UDim2.new(0.75, 0, 1, 0)
healthBar.Position = UDim2.new(0, 0, 0, 0)
healthBar.BackgroundColor3 = Color3.fromRGB(100, 255, 100)
healthBar.BorderSizePixel = 0
healthBar.Parent = healthBarBG

-- Pulse animation for low health
local pulseTween = TweenService:Create(
    healthBar,
    TweenInfo.new(1, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut, -1, true),
    {BackgroundColor3 = Color3.fromRGB(255, 100, 100)}
)

-- Sliding panel
local slidePanel = Instance.new("Frame")
slidePanel.Size = UDim2.new(0, 180, 0, 120)
slidePanel.Position = UDim2.new(1, 0, 0, 220) -- Start off-screen right
slidePanel.BackgroundColor3 = Color3.fromRGB(80, 80, 100)
slidePanel.BorderSizePixel = 0
slidePanel.Parent = container

local panelTitle = Instance.new("TextLabel")
panelTitle.Size = UDim2.new(1, 0, 0, 30)
panelTitle.Position = UDim2.new(0, 0, 0, 0)
panelTitle.BackgroundColor3 = Color3.fromRGB(60, 60, 80)
panelTitle.BorderSizePixel = 0
panelTitle.Text = "Notification Panel"
panelTitle.TextColor3 = Color3.fromRGB(255, 255, 255)
panelTitle.TextSize = 14
panelTitle.Font = Enum.Font.SourceSansBold
panelTitle.Parent = slidePanel

local panelContent = Instance.new("TextLabel")
panelContent.Size = UDim2.new(1, -10, 1, -40)
panelContent.Position = UDim2.new(0, 5, 0, 35)
panelContent.BackgroundTransparency = 1
panelContent.Text = "This panel slides in from the right with smooth animation!"
panelContent.TextColor3 = Color3.fromRGB(200, 200, 200)
panelContent.TextSize = 12
panelContent.Font = Enum.Font.SourceSans
panelContent.TextWrapped = true
panelContent.Parent = slidePanel

-- Control buttons
local buttonFrame = Instance.new("Frame")
buttonFrame.Size = UDim2.new(1, -20, 0, 80)
buttonFrame.Position = UDim2.new(0, 10, 1, -90)
buttonFrame.BackgroundColor3 = Color3.fromRGB(50, 50, 60)
buttonFrame.BorderSizePixel = 0
buttonFrame.Parent = container

-- Animation control buttons
local buttons = {
    {text = "Slide Panel In", pos = UDim2.new(0, 10, 0, 10), action = function()
        local slideIn = TweenService:Create(
            slidePanel,
            TweenInfo.new(0.5, Enum.EasingStyle.Back, Enum.EasingDirection.Out),
            {Position = UDim2.new(0, 400, 0, 220)}
        )
        slideIn:Play()
    end},
    {text = "Slide Panel Out", pos = UDim2.new(0, 130, 0, 10), action = function()
        local slideOut = TweenService:Create(
            slidePanel,
            TweenInfo.new(0.5, Enum.EasingStyle.Back, Enum.EasingDirection.In),
            {Position = UDim2.new(1, 0, 0, 220)}
        )
        slideOut:Play()
    end},
    {text = "Health Critical", pos = UDim2.new(0, 250, 0, 10), action = function()
        -- Animate health bar to critical level
        local healthTween = TweenService:Create(
            healthBar,
            TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
            {Size = UDim2.new(0.2, 0, 1, 0)}
        )
        healthTween:Play()
        pulseTween:Play() -- Start pulsing
    end},
    {text = "Heal Up", pos = UDim2.new(0, 370, 0, 10), action = function()
        pulseTween:Cancel() -- Stop pulsing
        local healTween = TweenService:Create(
            healthBar,
            TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
            {
                Size = UDim2.new(0.9, 0, 1, 0),
                BackgroundColor3 = Color3.fromRGB(100, 255, 100)
            }
        )
        healTween:Play()
    end},
    {text = "Fade Container", pos = UDim2.new(0, 10, 0, 45), action = function()
        local fadeTween = TweenService:Create(
            container,
            TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.InOut),
            {BackgroundTransparency = 0.7}
        )
        fadeTween:Play()
        wait(1.5)
        local unfadeTween = TweenService:Create(
            container,
            TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.InOut),
            {BackgroundTransparency = 0}
        )
        unfadeTween:Play()
    end},
    {text = "Scale Effect", pos = UDim2.new(0, 130, 0, 45), action = function()
        local scaleUp = TweenService:Create(
            rotateFrame,
            TweenInfo.new(0.2, Enum.EasingStyle.Back, Enum.EasingDirection.Out),
            {Size = UDim2.new(0, 120, 0, 120)}
        )
        local scaleDown = TweenService:Create(
            rotateFrame,
            TweenInfo.new(0.3, Enum.EasingStyle.Back, Enum.EasingDirection.In),
            {Size = UDim2.new(0, 80, 0, 80)}
        )
        scaleUp:Play()
        scaleUp.Completed:Connect(function()
            scaleDown:Play()
        end)
    end}
}

-- Create control buttons
for _, buttonData in ipairs(buttons) do
    local button = Instance.new("TextButton")
    button.Size = UDim2.new(0, 110, 0, 25)
    button.Position = buttonData.pos
    button.BackgroundColor3 = Color3.fromRGB(70, 70, 90)
    button.BorderSizePixel = 0
    button.Text = buttonData.text
    button.TextColor3 = Color3.fromRGB(255, 255, 255)
    button.TextSize = 11
    button.Font = Enum.Font.SourceSans
    button.Parent = buttonFrame
    
    button.MouseButton1Click:Connect(buttonData.action)
    
    -- Button hover effect
    button.MouseEnter:Connect(function()
        local hoverTween = TweenService:Create(
            button,
            TweenInfo.new(0.1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
            {BackgroundColor3 = Color3.fromRGB(90, 90, 110)}
        )
        hoverTween:Play()
    end)
    
    button.MouseLeave:Connect(function()
        local unhoverTween = TweenService:Create(
            button,
            TweenInfo.new(0.1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
            {BackgroundColor3 = Color3.fromRGB(70, 70, 90)}
        )
        unhoverTween:Play()
    end)
end

print("Advanced animation system created")
print("Features: sliding, bouncing, rotation, pulsing, fading, and scaling")
print("Interactive buttons control various animations")
`,
                expectedOutput: "Advanced animation system created\nFeatures: sliding, bouncing, rotation, pulsing, fading, and scaling\nInteractive buttons control various animations",
                hints: [
                    "Use TweenService:Create() to define animations",
                    "Chain animations using the Completed event",
                    "Set RepeatCount to -1 for infinite loops"
                ]
            },
            {
                id: 8,
                title: "Mobile-Responsive Design",
                duration: "32 min",
                content: `
                    <h1>Creating Mobile-Responsive GUIs</h1>
                    <p>Design GUIs that work perfectly on both desktop and mobile devices. Learn adaptive layouts and touch-friendly interfaces.</p>
                    <h2>Mobile Considerations</h2>
                    <ul>
                        <li><strong>Touch Targets:</strong> Minimum 44x44 pixels for touch elements</li>
                        <li><strong>Screen Orientation:</strong> Handle portrait and landscape modes</li>
                        <li><strong>Screen Size:</strong> Adapt to different screen sizes and resolutions</li>
                        <li><strong>Performance:</strong> Optimize for lower-end mobile devices</li>
                    </ul>
                    <h2>GuiService for Device Detection</h2>
                    <pre><code>local GuiService = game:GetService("GuiService")
local isMobile = GuiService:IsTenFootInterface() == false and 
                 GuiService.TouchEnabled</code></pre>
                `,
                starterCode: `-- Create responsive GUI that adapts to different devices
local Players = game:GetService("Players")
local GuiService = game:GetService("GuiService")
local UserInputService = game:GetService("UserInputService")
local TweenService = game:GetService("TweenService")
local player = Players.LocalPlayer

-- Device detection
local isMobile = UserInputService.TouchEnabled and not UserInputService.KeyboardEnabled
local isTablet = UserInputService.TouchEnabled and GuiService:IsTenFootInterface() == false
local isDesktop = UserInputService.KeyboardEnabled and UserInputService.MouseEnabled

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "ResponsiveUI"
screenGui.Parent = player.PlayerGui

-- Get screen size for responsive calculations
local screenSize = screenGui.AbsoluteSize
local function getScreenInfo()
    local size = screenGui.AbsoluteSize
    local isLandscape = size.X > size.Y
    local isPortrait = size.Y > size.X
    return {
        width = size.X,
        height = size.Y,
        isLandscape = isLandscape,
        isPortrait = isPortrait,
        aspectRatio = size.X / size.Y
    }
end

-- Responsive scaling function
local function getResponsiveSize(baseWidth, baseHeight)
    local screen = getScreenInfo()
    local scale = math.min(screen.width / 1920, screen.height / 1080) -- Base resolution 1920x1080
    scale = math.max(scale, 0.5) -- Minimum scale
    scale = math.min(scale, 2) -- Maximum scale
    
    if isMobile then
        scale = scale * 1.2 -- Slightly larger on mobile
    end
    
    return math.floor(baseWidth * scale), math.floor(baseHeight * scale)
end

-- Main container with responsive sizing
local containerWidth, containerHeight = getResponsiveSize(500, 400)
local container = Instance.new("Frame")
container.Size = UDim2.new(0, containerWidth, 0, containerHeight)
container.Position = UDim2.new(0.5, -containerWidth/2, 0.5, -containerHeight/2)
container.BackgroundColor3 = Color3.fromRGB(45, 45, 55)
container.BorderSizePixel = 0
container.Parent = screenGui

-- Header that adapts to device
local headerHeight = isMobile and 60 or 50
local header = Instance.new("Frame")
header.Size = UDim2.new(1, 0, 0, headerHeight)
header.Position = UDim2.new(0, 0, 0, 0)
header.BackgroundColor3 = Color3.fromRGB(35, 35, 45)
header.BorderSizePixel = 0
header.Parent = container

-- Title with responsive text size
local titleSize = isMobile and 18 or 16
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, -20, 1, 0)
title.Position = UDim2.new(0, 10, 0, 0)
title.BackgroundTransparency = 1
title.Text = string.format("Responsive UI Demo - %s", 
    isMobile and "Mobile" or isTablet and "Tablet" or "Desktop")
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = titleSize
title.Font = Enum.Font.SourceSansBold
title.TextXAlignment = Enum.TextXAlignment.Left
title.Parent = header

-- Device info panel
local infoPanel = Instance.new("Frame")
infoPanel.Size = UDim2.new(1, -20, 0, 100)
infoPanel.Position = UDim2.new(0, 10, 0, headerHeight + 10)
infoPanel.BackgroundColor3 = Color3.fromRGB(60, 60, 70)
infoPanel.BorderSizePixel = 0
infoPanel.Parent = container

local deviceInfo = Instance.new("TextLabel")
deviceInfo.Size = UDim2.new(1, -10, 1, 0)
deviceInfo.Position = UDim2.new(0, 5, 0, 0)
deviceInfo.BackgroundTransparency = 1

local screen = getScreenInfo()
local infoText = string.format(
    "Device Type: %s\nScreen: %dx%d\nAspect Ratio: %.2f\nOrientation: %s\nTouch: %s\nKeyboard: %s",
    isMobile and "Mobile" or isTablet and "Tablet" or "Desktop",
    screen.width, screen.height, screen.aspectRatio,
    screen.isLandscape and "Landscape" or "Portrait",
    UserInputService.TouchEnabled and "Yes" or "No",
    UserInputService.KeyboardEnabled and "Yes" or "No"
)

deviceInfo.Text = infoText
deviceInfo.TextColor3 = Color3.fromRGB(200, 200, 200)
deviceInfo.TextSize = isMobile and 14 or 12
deviceInfo.Font = Enum.Font.SourceSans
deviceInfo.TextXAlignment = Enum.TextXAlignment.Left
deviceInfo.TextYAlignment = Enum.TextYAlignment.Top
deviceInfo.Parent = infoPanel

-- Button layout - responsive grid
local buttonContainer = Instance.new("Frame")
buttonContainer.Size = UDim2.new(1, -20, 0, 120)
buttonContainer.Position = UDim2.new(0, 10, 0, headerHeight + 120)
buttonContainer.BackgroundTransparency = 1
buttonContainer.Parent = container

-- Calculate button layout based on device
local buttonsPerRow = isMobile and 2 or 3
local buttonWidth = (containerWidth - 40 - ((buttonsPerRow - 1) * 10)) / buttonsPerRow
local buttonHeight = isMobile and 50 or 40
local buttonSpacing = 10

local buttons = {
    {text = "Action 1", color = Color3.fromRGB(100, 150, 255)},
    {text = "Action 2", color = Color3.fromRGB(255, 150, 100)},
    {text = "Action 3", color = Color3.fromRGB(150, 255, 100)},
    {text = "Action 4", color = Color3.fromRGB(255, 100, 150)},
    {text = "Action 5", color = Color3.fromRGB(150, 100, 255)},
    {text = "Action 6", color = Color3.fromRGB(100, 255, 255)}
}

-- Create responsive button grid
for i, buttonData in ipairs(buttons) do
    local row = math.floor((i - 1) / buttonsPerRow)
    local col = (i - 1) % buttonsPerRow
    
    local button = Instance.new("TextButton")
    button.Size = UDim2.new(0, buttonWidth, 0, buttonHeight)
    button.Position = UDim2.new(0, col * (buttonWidth + buttonSpacing), 0, row * (buttonHeight + buttonSpacing))
    button.BackgroundColor3 = buttonData.color
    button.BorderSizePixel = 0
    button.Text = buttonData.text
    button.TextColor3 = Color3.fromRGB(255, 255, 255)
    button.TextSize = isMobile and 16 or 14
    button.Font = Enum.Font.SourceSansBold
    button.Parent = buttonContainer
    
    -- Touch-friendly feedback
    button.MouseButton1Click:Connect(function()
        -- Visual feedback
        local originalColor = button.BackgroundColor3
        button.BackgroundColor3 = Color3.fromRGB(
            math.max(0, originalColor.R * 255 - 30),
            math.max(0, originalColor.G * 255 - 30),
            math.max(0, originalColor.B * 255 - 30)
        )
        
        -- Haptic feedback on mobile (simulated)
        if isMobile then
            -- In a real game, you might use UserInputService:GamepadSupports(Enum.UserInputType.Gamepad1, Enum.KeyCode.ButtonX)
            -- to provide haptic feedback
        end
        
        wait(0.1)
        button.BackgroundColor3 = originalColor
        
        print(string.format("Button pressed: %s (Device: %s)", 
            buttonData.text, isMobile and "Mobile" or "Desktop"))
    end)
    
    -- Hover effects (desktop only)
    if not isMobile then
        button.MouseEnter:Connect(function()
            local hoverTween = TweenService:Create(
                button,
                TweenInfo.new(0.1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
                {Size = UDim2.new(0, buttonWidth * 1.05, 0, buttonHeight * 1.05)}
            )
            hoverTween:Play()
        end)
        
        button.MouseLeave:Connect(function()
            local unhoverTween = TweenService:Create(
                button,
                TweenInfo.new(0.1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
                {Size = UDim2.new(0, buttonWidth, 0, buttonHeight)}
            )
            unhoverTween:Play()
        end)
    end
end

-- Orientation change handler (for mobile)
local function handleOrientationChange()
    if isMobile then
        local newScreen = getScreenInfo()
        local newContainerWidth, newContainerHeight = getResponsiveSize(500, 400)
        
        -- Animate container to new size and position
        local resizeTween = TweenService:Create(
            container,
            TweenInfo.new(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
            {
                Size = UDim2.new(0, newContainerWidth, 0, newContainerHeight),
                Position = UDim2.new(0.5, -newContainerWidth/2, 0.5, -newContainerHeight/2)
            }
        )
        resizeTween:Play()
        
        print("Orientation changed to:", newScreen.isLandscape and "Landscape" or "Portrait")
    end
end

-- Monitor for screen size changes
screenGui:GetPropertyChangedSignal("AbsoluteSize"):Connect(handleOrientationChange)

-- Bottom status bar
local statusBar = Instance.new("Frame")
statusBar.Size = UDim2.new(1, 0, 0, 30)
statusBar.Position = UDim2.new(0, 0, 1, -30)
statusBar.BackgroundColor3 = Color3.fromRGB(25, 25, 35)
statusBar.BorderSizePixel = 0
statusBar.Parent = container

local statusText = Instance.new("TextLabel")
statusText.Size = UDim2.new(1, -10, 1, 0)
statusText.Position = UDim2.new(0, 5, 0, 0)
statusText.BackgroundTransparency = 1
statusText.Text = string.format("Responsive UI Active | Scale: %.1fx | Touch: %s",
    containerWidth / 500, -- Scale factor
    isMobile and "Enabled" or "Disabled"
)
statusText.TextColor3 = Color3.fromRGB(150, 150, 150)
statusText.TextSize = 10
statusText.Font = Enum.Font.SourceSans
statusText.TextXAlignment = Enum.TextXAlignment.Left
statusText.Parent = statusBar

print("Responsive GUI system created")
print(string.format("Device detected: %s", isMobile and "Mobile" or isTablet and "Tablet" or "Desktop"))
print(string.format("Container size: %dx%d (Scale: %.1fx)", containerWidth, containerHeight, containerWidth / 500))
print(string.format("Button layout: %d buttons per row", buttonsPerRow))
print("Features: device detection, responsive scaling, orientation handling")
`,
                expectedOutput: "Responsive GUI system created\nDevice detected: Desktop\nContainer size: 500x400 (Scale: 1.0x)\nButton layout: 3 buttons per row\nFeatures: device detection, responsive scaling, orientation handling",
                hints: [
                    "Use UserInputService to detect device capabilities",
                    "Scale UI elements based on screen size and device type",
                    "Make touch targets at least 44x44 pixels on mobile"
                ]
            }
        ]
    },
    mechanics: {
        title: "Game Mechanics & Logic",
        description: "Learn to create engaging game mechanics, player interactions, and game systems",
        totalLessons: 1,
        estimatedHours: 2,
        chapters: [
            { title: "Introduction to Game Mechanics", lessons: [1] }
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
print("Coin material:", coin.Material.Name)
`,
                expectedOutput: "Coin created! Touch it to collect.\nCoin material: Neon",
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
        totalLessons: 1,
        estimatedHours: 2,
        chapters: [
            { title: "Studio Interface & Basics", lessons: [1] }
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
                expectedOutput: "Welcome to Roblox Studio!\nYou are learning to use Studio's scripting environment.\nCreated a test part in the workspace!",
                hints: [
                    "Use print() statements to see output in Studio's Output window",
                    "game:GetService() gets important game services",
                    "Instance.new() creates new objects"
                ]
            }
        ]
    },
    scripting: {
        title: "Advanced Scripting Techniques",
        description: "Master advanced programming concepts, optimization techniques, and complex scripting patterns",
        totalLessons: 1,
        estimatedHours: 3,
        chapters: [
            { title: "Object-Oriented Programming", lessons: [1] }
        ],
        lessons: [
            {
                id: 1,
                title: "Introduction to Object-Oriented Programming",
                duration: "25 min",
                content: `
                    <h1>Object-Oriented Programming in Lua</h1>
                    <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes. While Lua doesn't have built-in classes, we can simulate OOP using tables and metatables.</p>
                    <h2>Benefits of OOP</h2>
                    <ul>
                        <li><strong>Code Reusability:</strong> Write once, use many times</li>
                        <li><strong>Maintainability:</strong> Easier to update and debug</li>
                        <li><strong>Organization:</strong> Better code structure and readability</li>
                        <li><strong>Encapsulation:</strong> Keep related data and functions together</li>
                    </ul>
                    <h2>Creating Classes with Metatables</h2>
                    <p>In Lua, we use tables and metatables to create class-like behavior:</p>
                    <pre><code>-- Define a Player class
local Player = {}
Player.__index = Player

function Player.new(name, health)
    local self = setmetatable({}, Player)
    self.name = name or "Unknown"
    self.health = health or 100
    return self
end</code></pre>
                `,
                starterCode: `-- Create a Player class using Lua tables and metatables
local Player = {}
Player.__index = Player

-- Constructor function
function Player.new(name, health)
    local self = setmetatable({}, Player)
    self.name = name or "Unknown Player"
    self.health = health or 100
    self.maxHealth = health or 100
    return self
end

-- Method to display player info
function Player:displayInfo()
    return string.format("Player: %s | Health: %d/%d", self.name, self.health, self.maxHealth)
end

-- Create a player instance
local player1 = Player.new("Alice", 150)
print(player1:displayInfo())

-- Create another player with default values
local player2 = Player.new("Bob")
print(player2:displayInfo())
`,
                expectedOutput: "Player: Alice | Health: 150/150\nPlayer: Bob | Health: 100/100",
                hints: [
                    "Use setmetatable() to create object instances",
                    "The __index metamethod enables method calls",
                    "Use self parameter to access object properties"
                ]
            }
        ]
    },
    networking: {
        title: "Multiplayer & Networking",
        description: "Learn to create seamless multiplayer experiences with proper networking and data management",
        totalLessons: 1,
        estimatedHours: 2,
        chapters: [
            { title: "Client-Server Architecture", lessons: [1] }
        ],
        lessons: [
            {
                id: 1,
                title: "Understanding Client-Server Architecture",
                duration: "20 min",
                content: `
                    <h1>Client-Server Architecture in Roblox</h1>
                    <p>Roblox uses a client-server model where the server maintains the authoritative game state, and clients (players) connect to experience the game. Understanding this architecture is crucial for creating robust multiplayer games.</p>
                    <h2>Key Concepts</h2>
                    <ul>
                        <li><strong>Server:</strong> Runs the main game logic and maintains authoritative state</li>
                        <li><strong>Client:</strong> Each player's device that displays the game and handles input</li>
                        <li><strong>Replication:</strong> How changes are synchronized between server and clients</li>
                        <li><strong>Network Ownership:</strong> Which side (client or server) controls specific objects</li>
                    </ul>
                    <h2>Server Scripts vs LocalScripts</h2>
                    <ul>
                        <li><strong>Server Scripts:</strong> Run on the server, handle game logic and security</li>
                        <li><strong>LocalScripts:</strong> Run on each client, handle UI and user input</li>
                        <li><strong>ModuleScripts:</strong> Shared code that can be required by both server and client</li>
                    </ul>
                `,
                starterCode: `-- Server Script: Game Logic Example
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

-- Server-side player data
local playerData = {}

-- Function to initialize player data
local function onPlayerAdded(player)
    playerData[player.UserId] = {
        coins = 0,
        level = 1,
        joinTime = tick()
    }
    
    print("Player joined:", player.Name)
    print("Initialized data for player:", player.UserId)
end

-- Function to clean up player data
local function onPlayerRemoving(player)
    if playerData[player.UserId] then
        playerData[player.UserId] = nil
        print("Cleaned up data for:", player.Name)
    end
end

-- Connect events
Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoving)

print("Server initialized - Ready for players!")
`,
                expectedOutput: "Server initialized - Ready for players!",
                hints: [
                    "Server scripts handle authoritative game logic",
                    "Store player data on the server for security",
                    "Use PlayerAdded and PlayerRemoving events"
                ]
            }
        ]
    }
};

// Export for use in learning environment
window.courseContent = courseContent;
