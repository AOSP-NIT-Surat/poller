# Poller

## Set-up project for contribution

### Setup and start backend
```	
cd backend
npm i
npm run dev
```
Change the `.env` and add the required fields

### Setup and start frontend
	
```
cd frontend
npm i
npm start
```

## Contributing 

- First fork this repo 
- Clone the forked repo into your computer
- make a branch
	```
	git branch <branch-name>
	git checkout <branch-name>
	```
- Ask for doubts in issues

### Get updates from the main branch

- Add upstream to the repo
	
	```
	git remote add upstream https://github.com/AOSP-NIT-Surat/poller.git
	```
- Get updated : Get updates from the orignal version to forked verison
	
	```
	git checkout main
	git fetch upstream
	git merge upstream/main
	git push origin main
	```
