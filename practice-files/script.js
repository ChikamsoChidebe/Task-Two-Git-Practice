// Git Practice Project JavaScript

console.log('Git Practice Project Loaded!');

// Simulate Git command execution
const gitCommands = [
    'git init',
    'git add .',
    'git commit -m "Initial commit"',
    'git branch feature/new-feature',
    'git checkout feature/new-feature',
    'git push origin feature/new-feature'
];

// Display Git commands in console
console.log('Essential Git Commands:');
gitCommands.forEach((command, index) => {
    console.log(`${index + 1}. ${command}`);
});

// Interactive command demonstration
function demonstrateGitWorkflow() {
    console.log('\n=== Git Workflow Demonstration ===');
    
    const workflow = [
        { step: 1, action: 'Repository initialized', command: 'git init' },
        { step: 2, action: 'Files staged', command: 'git add .' },
        { step: 3, action: 'Changes committed', command: 'git commit -m "Add files"' },
        { step: 4, action: 'Branch created', command: 'git checkout -b feature/demo' },
        { step: 5, action: 'Changes pushed', command: 'git push origin feature/demo' }
    ];
    
    workflow.forEach(item => {
        console.log(`Step ${item.step}: ${item.action} (${item.command})`);
    });
}

// Branch management simulation
const branches = {
    main: { commits: 5, lastCommit: 'Initial project setup' },
    'feature/authentication': { commits: 3, lastCommit: 'Add login functionality' },
    'feature/dashboard': { commits: 2, lastCommit: 'Create user dashboard' },
    'hotfix/security-patch': { commits: 1, lastCommit: 'Fix security vulnerability' }
};

function showBranches() {
    console.log('\n=== Repository Branches ===');
    Object.entries(branches).forEach(([name, info]) => {
        console.log(`Branch: ${name}`);
        console.log(`  Commits: ${info.commits}`);
        console.log(`  Last commit: ${info.lastCommit}`);
        console.log('---');
    });
}

// Commit history simulation
const commitHistory = [
    { hash: 'a1b2c3d', message: 'Initial commit', author: 'Developer', date: '2024-01-15' },
    { hash: 'e4f5g6h', message: 'Add HTML structure', author: 'Developer', date: '2024-01-15' },
    { hash: 'i7j8k9l', message: 'Style with CSS', author: 'Developer', date: '2024-01-15' },
    { hash: 'm0n1o2p', message: 'Add JavaScript functionality', author: 'Developer', date: '2024-01-15' },
    { hash: 'q3r4s5t', message: 'Update documentation', author: 'Developer', date: '2024-01-15' }
];

function showCommitHistory() {
    console.log('\n=== Commit History (git log --oneline) ===');
    commitHistory.forEach(commit => {
        console.log(`${commit.hash} ${commit.message}`);
    });
}

// Run demonstrations when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - Running Git demonstrations...');
    
    setTimeout(() => {
        demonstrateGitWorkflow();
    }, 1000);
    
    setTimeout(() => {
        showBranches();
    }, 2000);
    
    setTimeout(() => {
        showCommitHistory();
    }, 3000);
    
    // Add interactive elements
    const commandCards = document.querySelectorAll('.command-card');
    commandCards.forEach(card => {
        card.addEventListener('click', function() {
            const command = this.querySelector('h3').textContent;
            console.log(`Clicked command: ${command}`);
            console.log(`This would execute: ${command}`);
        });
    });
});

// Git status simulation
function gitStatus() {
    const status = {
        branch: 'main',
        ahead: 0,
        behind: 0,
        staged: [],
        modified: ['README.md'],
        untracked: ['new-file.txt']
    };
    
    console.log('\n=== Git Status ===');
    console.log(`On branch ${status.branch}`);
    if (status.modified.length > 0) {
        console.log('Changes not staged for commit:');
        status.modified.forEach(file => console.log(`  modified: ${file}`));
    }
    if (status.untracked.length > 0) {
        console.log('Untracked files:');
        status.untracked.forEach(file => console.log(`  ${file}`));
    }
}

// Export functions for testing
window.gitDemo = {
    demonstrateGitWorkflow,
    showBranches,
    showCommitHistory,
    gitStatus
};