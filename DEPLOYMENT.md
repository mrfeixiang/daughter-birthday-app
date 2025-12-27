# 🚀 Deploy Birthday App to GitHub Pages

## Step 1: Install Xcode Command Line Tools
A dialog should have appeared on your screen. Click "Install" and wait for it to complete (this may take a few minutes).

## Step 2: Create a GitHub Repository

1. Go to https://github.com and sign in (or create an account if you don't have one)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it something like `birthday-app` or `daughter-birthday`
5. Keep it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 3: Push Your Code to GitHub

After Xcode tools are installed, run these commands in the terminal from the birthday-app folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Birthday app for my daughter"

# Add your GitHub repository as remote (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

## Step 5: Access Your App

Your app will be live at:
```
https://USERNAME.github.io/REPO-NAME/
```

Share this link with your daughter and she can access it from any device!

## Quick Commands (After Xcode Installation)

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name:

```bash
cd ~/birthday-app
git init
git add .
git commit -m "Birthday app for my 8-year-old daughter 🎉"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## Troubleshooting

**If git push asks for credentials:**
- Use your GitHub username
- For password, use a Personal Access Token (not your GitHub password)
- Create token at: https://github.com/settings/tokens

**If you need to update the app later:**
```bash
cd ~/birthday-app
git add .
git commit -m "Update birthday app"
git push
```

The changes will appear on GitHub Pages within 1-2 minutes!