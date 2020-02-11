POST https://api.dreamingoftech.uk/addBacklog
content-type: application/json

{
    "name": "Harry Potter Lego Years 1-4",
  "started": true,
  "platinumCandidate": true,
  "completed": false,
  "platinum": false
}

POST https://api.dreamingoftech.uk/updateBacklog
content-type: application/json

{
  "ID": "5e41377ea60c7d68a3a79302",
  "Item": {
    "name": "HP Done"
  }
}


  GET https://api.dreamingoftech.uk/getBacklog
  content-type: application/json
