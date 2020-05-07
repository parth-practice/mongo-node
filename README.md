# MongoDB setup

# If you are getting error like `mkdir: /data: Read-only file system` in MAC os

## Steps

  1. create directory whenever you want in your system (I made it under /Users/USER_NAME) - Run command `mkdir -p /Users/YOUR_USER_NAME/data/db`
  2. Run command `export PATH="$PATH:/usr/local/mongodb/bin"`
  3. Run Command to start MongoDB `mongod --dbpath=/Users/YOUR_USER_NAME/data/db`
