fetch('https://whatyearisit-backend-rose-alpha.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log('data : ',data)
   document.querySelector('#year').textContent = data.year;
 });

 //whatyearisit-backend-dcgnlc7vo-alicebleroy-gmailcom.vercel.app/year
 //https://whatyearisit-backend-rose-alpha.vercel.app/year

