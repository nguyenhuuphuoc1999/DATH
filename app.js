const express = require('express');
const app     = express();
const mongoose = require('mongoose');

app.get('/' ,async function(req,res){       
    res.send("Hello")
})

app.listen(3000)

// const uri = 'mogodb://localhost/DATH';
// const POST = process.env.PORT || 9000;

// mongoose.connection.once('open',()=>{
//     app.listen(PORT,() => console.log(`Server started  ad PORT ${PORT}`));
// });
