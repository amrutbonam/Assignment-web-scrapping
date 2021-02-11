// extracting publishing date
let publishingDate = document.querySelectorAll('.lbl-licitacao')[0].innerText 
publishingDate=publishingDate.split(':')[1]

// extracting bidding date
let biddingDate=document.querySelectorAll('.lbl-licitacao')[5].innerText.split(':')[1]

// extracting object content
let objectContent=document.querySelectorAll('.lbl-licitacao')[1].nextSibling.nextSibling.innerText

// extracting links
let linksArray = document.querySelectorAll('tbody > tr > td:nth-child(2) > div > div > h2 > a')
let arr = Array.prototype.slice.call(linksArray)
const links = arr.map(aTag => aTag.href)