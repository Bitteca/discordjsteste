const express = require('express')
const app = express()
const url = require('url')
const Discord = require('discord.js')
const client = new Discord.Client()

app.get('/discord', (req, res) => {
  const urlObj = url.parse(req.url)
  console.log(urlObj)
  res.redirect('http://localhost:3001')
})

app.listen(3333, () => {
  console.log('Server started')
})
