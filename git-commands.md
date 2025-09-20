# Git Commands Reference & Practice Log

## 📋 Command Execution Log

### 1. Repository Initialization
```bash
# Command executed:
git init

# Output:
Initialized empty Git repository in /path/to/Task-Two-Git-Practice/.git/

# Purpose: Initialize local Git repository
```

### 2. Initial Configuration
```bash
# Set user name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

### 3. Adding Files
```bash
# Add all files
git add .

# Add specific file
git add README.md

# Check status
git status
```

### 4. First Commit
```bash
# Initial commit
git commit -m "Initial commit: Add project structure and documentation"

# View commit history
git log --oneline
```

### 5. Remote Repository Setup
```bash
# Add remote origin
git remote add origin https://github.com/yourusername/Task-Two-Git-Practice.git

# Verify remote
git remote -v

# Push to remote
git push -u origin main
```

### 6. Branch Operations
```bash
# Create and switch to feature branch
git checkout -b feature/add-practice-files

# List all branches
git branch -a

# Switch back to main
git checkout main

# Create another branch
git branch hotfix/urgent-fix
```

### 7. Making Changes and Commits
```bash
# After making changes to files
git add practice-files/

# Commit with descriptive message
git commit -m "Add practice HTML, CSS, and JS files"

# Push feature branch
git push origin feature/add-practice-files
```

### 8. Merging Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature/add-practice-files

# Push merged changes
git push origin main
```

### 9. Reverting Changes
```bash
# Revert last commit
git revert HEAD

# Reset to previous commit (careful!)
git reset --hard HEAD~1

# View commit history
git log --graph --oneline
```

### 10. Fetching and Pulling
```bash
# Fetch latest changes
git fetch origin

# Pull and merge changes
git pull origin main

# Pull specific branch
git pull origin feature-branch
```

## 🔄 Workflow Scenarios

### Scenario A: Feature Development
1. `git checkout -b feature/new-functionality`
2. Make changes to files
3. `git add .`
4. `git commit -m "Implement new functionality"`
5. `git push origin feature/new-functionality`
6. Create Pull Request on GitHub
7. Review and merge

### Scenario B: Hotfix Workflow
1. `git checkout main`
2. `git checkout -b hotfix/critical-bug`
3. Fix the bug
4. `git add .`
5. `git commit -m "Fix critical bug in production"`
6. `git checkout main`
7. `git merge hotfix/critical-bug`
8. `git push origin main`

### Scenario C: Collaboration
1. `git clone https://github.com/teammate/project.git`
2. `git checkout -b feature/my-contribution`
3. Make changes
4. `git add .`
5. `git commit -m "Add my contribution"`
6. `git push origin feature/my-contribution`
7. Create Pull Request

## 📊 Command Summary

| Command | Purpose | Frequency Used |
|---------|---------|----------------|
| `git status` | Check repository status | Very High |
| `git add` | Stage changes | Very High |
| `git commit` | Save changes | Very High |
| `git push` | Upload to remote | High |
| `git pull` | Download from remote | High |
| `git branch` | Manage branches | Medium |
| `git merge` | Combine branches | Medium |
| `git checkout` | Switch branches | High |
| `git log` | View history | Medium |
| `git revert` | Undo changes | Low |

## 🎯 Learning Outcomes

- ✅ Mastered basic Git commands
- ✅ Understood branching strategies
- ✅ Practiced merge workflows
- ✅ Learned collaboration techniques
- ✅ Experienced conflict resolution
- ✅ Implemented proper commit messages
- ✅ Used remote repository operations

## 📝 Best Practices Learned

1. **Commit Messages**: Use clear, descriptive messages
2. **Branching**: Create feature branches for new work
3. **Frequent Commits**: Make small, logical commits
4. **Pull Before Push**: Always pull latest changes first
5. **Review Changes**: Use `git diff` before committing
6. **Backup**: Push regularly to remote repository