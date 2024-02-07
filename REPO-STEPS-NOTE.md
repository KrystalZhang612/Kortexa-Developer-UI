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
5. Create a new `main` branch if there's no main branch:
   ```bash
   git branch -M main
   ```
7. add remote origin to the newly created repo:
   ```bash
   git remote add origin https://github.com/REPO.git
   ```
## NOTE: CHECK SOURCE CONTROL TO SEE IF ALL CHANGES ARE COMMITTED & SAVED BEFORE STEP 8. 
8. The current branch main has no upstream branch, thus to push the current branch and set the remote as upstream, run:
   ```bash
   git push --set-upstream origin main
   ```
9. add a LICENSE GPL-3.0: create new new file -> LICENSE no md -> choose template
10. add Compatibility: Security -> Policy
11. after done with README.md. Deploy on Netlify: Sites -> Browse & Upload -> Domain management -> Options -> Edit Site Name -> Sites -> Favorite the deployed sites
    If to delete site: Site Configuration -> delete site
12. Settings-> Pull Requests -> only Allow rebase merging
13. Moderation options -> Interaction limits -> set 3 of them as 24 hrs.
14. Settings -> Branches -> Settings-> Branches->
Branch protection rules -> Name the branch protection pattern: `mainbranch`-> Add branch protection rule -> Select everything BESIDES Rules applied to
everyone including administrators.
