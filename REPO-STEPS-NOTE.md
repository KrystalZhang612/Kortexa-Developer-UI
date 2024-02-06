# Complete Steps to fully push a finished project from the latest version of Vscode into a created GitHub repo:
1. Create a new repo on github  -> no README + no Gitignore.
2. In Vscode->Source Control-> delete all current remotes -> ensure Source Control is clear 
   In Vscode terminal:
3. Initialize a new Git repository in the current directory: 
   ```bash
   git init 
   ```
4. Commit changes directly to the local Vscode repo:
   ```bash
   git commit -m "MESSAGE"
   ```
5. Check existing branches, make sure `main` in there:
   ```bash
   git branch
   ```
6. add remote origin to the newly created repo:
   ```bash
   git remote add origin https://github.com/REPO.git
   ```
7. The current branch main has no upstream branch, thus to push the current branch and set the remote as upstream, run:
   ```bash
   git push --set-upstream origin main
   ```
ADD LICENSE AT THE  VERY END 

