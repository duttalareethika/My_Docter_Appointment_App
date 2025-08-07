#!/bin/bash

# Kill any app running on port 8000
fuser -k 8000/tcp || true

cd /home/ec2-user/doctor-backend

# MongoDB Atlas connection string
export MONGO_URI="mongodb+srv://srinivasbalam02:Srinivas2003@doctorappointment.dacuyx7.mongodb.net/?retryWrites=true&w=majority&appName=doctorappointment"
export NODE_ENV="production"

# Start the backend server in background
nohup node index.js > server.log 2>&1 &

