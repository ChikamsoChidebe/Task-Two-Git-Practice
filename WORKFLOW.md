# Git Workflow Guide

## 🚀 Step-by-Step Git Practice Workflow

### Phase 1: Repository Setup

1. **Initialize Repository**
   ```bash
   cd "C:\Users\HP\Desktop\Task-Two-Git-Practice"
   git init
   ```

2. **Configure Git**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Add Files**
   ```bash
   git add .
   git status
   ```

4. **Initial Commit**
   ```bash
   git commit -m "Initial commit: Add project structure and documentation"
   ```

### Phase 2: Remote Repository

1. **Create GitHub Repository**
   - Go to GitHub.com
   - Click "New Repository"
   - Name: "Task-Two-Git-Practice"
   - Make it public
   - Don't initialize with README (we already have one)

2. **Add Remote Origin**
   ```bash
   git remote add origin https://github.com/yourusername/Task-Two-Git-Practice.git
   git branch -M main
   git push -u origin main
   ```

### Phase 3: Branch Practice

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/add-styling
   ```

2. **Make Changes**
   - Edit `practice-files/style.css`
   - Add new styles or modify existing ones

3. **Commit Changes**
   ```bash
   git add practice-files/style.css
   git commit -m "Enhance CSS styling for better visual appeal"
   ```

4. **Push Feature Branch**
   ```bash
   git push origin feature/add-styling
   ```

### Phase 4: Pull Request Workflow

1. **Create Pull Request**
   - Go to GitHub repository
   - Click "Compare & pull request"
   - Add description: "Enhanced styling for better user experience"
   - Create pull request

2. **Review and Merge**
   - Review changes in GitHub
   - Add comments if needed
   - Merge pull request
   - Delete feature branch

3. **Update Local Repository**
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/add-styling
   ```

### Phase 5: Advanced Operations

1. **Create Hotfix Branch**
   ```bash
   git checkout -b hotfix/fix-typo
   ```

2. **Fix Issue**
   - Correct any typos in documentation
   - Make quick fix

3. **Commit and Merge**
   ```bash
   git add .
   git commit -m "Fix typo in documentation"
   git checkout main
   git merge hotfix/fix-typo
   git push origin main
   git branch -d hotfix/fix-typo
   ```

### Phase 6: Collaboration Simulation

1. **Clone Repository (simulate teammate)**
   ```bash
   cd ../
   git clone https://github.com/yourusername/Task-Two-Git-Practice.git Task-Two-Collaboration
   cd Task-Two-Collaboration
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/add-javascript-features
   ```

3. **Make Changes and Push**
   ```bash
   # Edit script.js to add new functions
   git add .
   git commit -m "Add interactive features to JavaScript"
   git push origin feature/add-javascript-features
   ```

## 📊 Commands Summary

| Phase | Commands Used | Purpose |
|-------|---------------|---------|
| Setup | `git init`, `git config`, `git add`, `git commit` | Initialize and configure |
| Remote | `git remote add`, `git push` | Connect to GitHub |
| Branching | `git checkout -b`, `git branch`, `git merge` | Feature development |
| Collaboration | `git clone`, `git pull`, `git fetch` | Team workflow |
| Advanced | `git revert`, `git reset`, `git log` | History management |

## 🎯 Learning Objectives Met

- ✅ Repository creation and initialization
- ✅ Basic Git commands (add, commit, push, pull)
- ✅ Branch creation and management
- ✅ Remote repository operations
- ✅ Pull request workflow
- ✅ Merge and conflict resolution
- ✅ Collaboration simulation
- ✅ Command line proficiency

## 📝 Documentation Requirements

For each phase, ensure you:
1. Take screenshots of command execution
2. Document any errors and solutions
3. Record command outputs
4. Note best practices learned

## 🚀 Submission Checklist

- [ ] Repository created on GitHub
- [ ] All files committed and pushed
- [ ] Multiple branches created and merged
- [ ] Pull requests demonstrated
- [ ] Screenshots documented
- [ ] README updated with GitHub link
- [ ] Email sent with repository link