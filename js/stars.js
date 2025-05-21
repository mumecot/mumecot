{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;}
{\colortbl;\red255\green255\blue255;\red26\green26\blue26;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c13333\c13333\c13333;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
document.addEventListener("DOMContentLoaded", () => \{\cb1 \
\cb3 const starContainer = document.createElement("div");\cb1 \
\cb3 starContainer.className = "stars-container";\cb1 \
\cb3 document.body.appendChild(starContainer);\cb1 \
\
\cb3 const numStars = 80;\cb1 \
\cb3 for (let i = 0; i < numStars; i++) \{\cb1 \
\cb3 const star = document.createElement("div");\cb1 \
\cb3 const size = Math.random() * 2 + 1;\cb1 \
\cb3 const duration = Math.random() * 3 + 2;\cb1 \
\cb3 const colors = ['#f5f3f0', '#ebd978', '#a6c8de', '#d4cdb8', '#c7c9d4'];\cb1 \
\
\cb3 star.style.background = colors[Math.floor(Math.random() * colors.length)];\cb1 \
\cb3 star.classList.add("star");\cb1 \
\cb3 star.style.width = `$\{size\}px`;\cb1 \
\cb3 star.style.height = `$\{size\}px`;\cb1 \
\cb3 star.style.top = `$\{Math.random() * 100\}%`;\cb1 \
\cb3 star.style.left = `$\{Math.random() * 100\}%`;\cb1 \
\cb3 star.style.animationDuration = `$\{duration\}s`;\cb1 \
\
\cb3 starContainer.appendChild(star);\cb1 \
\cb3 \}\cb1 \
\cb3 \});}