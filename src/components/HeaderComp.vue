<template>
  <div class="header">    
    <nav>
      <div class="container">
        <div class="logo">
          <img src="../assets/mainlogo.png">
        </div>
        <span class="menu"> <i class="fas fa-bars"></i> </span>
        <ul>
          <li> <a href="#"> Home </a> </li>
          <li> <a href="#"> Collection </a> </li>
          <li> <a href="#"> Shoes </a> </li>
          <li> <a href="#"> Racing Boots </a> </li>
          <li> <a href="#"> Contacts </a> </li>
          <li> <a href="#"> <img src="../assets/search_icon.png"> <img src="../assets/shop_icon.png"> </a> </li>
        </ul>
      </div>
    </nav>
   <!---------header---------> 
    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <div class="headertext">
              <span>New Running Shoes </span>
              <h1>Men's Like Plex</h1>
              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button class="buy">Buy Now </button>
              <button class="buy"> See More </button>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12">
            <div class="headerimg">
              <img src="../assets/running-shoes.png">
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default ({
  name:"header"
})
</script>

<style lang="scss" scoped>
$grey_dark: #000b17 ;
$pink: #ff4e5b;
 .container{
   width: 70%;
   margin: auto;
   overflow: hidden;
   >span{
      float: right;
      right: 0;
      font-size: 35px;
      color: white;
      display: none;
      cursor: pointer;
   }
 }
 nav{
   background-color: $grey_dark;
   padding: 13px 0px;
   overflow: hidden;
   .logo{
     float: left;
     width: 9%;
     img{
       width: 100%;
     }
   }
   ul{
     float: right;
     padding: 0px;
     padding-top: 7px;
     margin: 0px;
     display: flex;
     list-style: none;
     li{
       a{
        color: white;    
        text-decoration: none;
        padding: 10px;
        font-size: 20px;
        font-family: sans-serif;
        transition: 0.2s all ease-in-out;
       }
       :hover{
         color: $pink;
       }
     }
     li:last-of-type{
       a{
         img{
           width: 22%;
           margin: auto;
           margin-left: 10px;
         }
       }
     }
   }
 }
 header{
   overflow: hidden;
   padding: 50px 0px;
   background-image: url(../assets/banner.png);
   background-size: cover;
   .container{
     overflow: visible;
   }
   .headertext{
     padding-top: 80px;
     span{
       color: $pink;
       font-family: system-ui;
       font-size: 30px;
     }
     h1{
       color: white;
       font-family: system-ui;
       font-size: 60px;
       margin: 0px;
     }
     p{
       color: white;
       font-family: system-ui;
       font-size: 17px;
       margin: 20px 0px;
     }
     button{
       margin-right: 5%;
       border: 0px;
       padding: 13px 7%;
       font-size: 19px;
       cursor: pointer;
       float: left;
     }
     button:first-of-type{
       color: white;
       background-color: $pink;
     }
     button:last-of-type{
       color: $pink;
       background-color: white;
     }
   }
   .headerimg{
     img{
       width: 100%;
       margin: auto;
       margin-left: 70px;
       margin-top: 100px;
     }
   }
 }
 
 /*********media*******/
 //img header
 @media (max-width:992px) {
   header .headerimg img{
     width: 85%;
   }
 }
 //img in ul
 @media (min-width:200px) and (max-width:600px) {
   nav ul li:last-of-type a img{
     width: 8%;
     margin-right: 15px;
   }
 }
  @media (min-width:601px) and (max-width:800px) {
   nav ul li:last-of-type a img{
     width: 5%;
     margin-right: 15px;
   }
 }
   @media (min-width:801px) and (max-width:1040px) {
   nav ul li:last-of-type a img{
     width: 4%;
     margin-right: 15px;
   }
 }

 //logo
 @media (min-width:200px) and (max-width:600px) {
  nav .logo{
    width: 25%;
  }
 }
@media (min-width:601px) and (max-width:750px) {
  nav .logo{
    width: 20%;
  }
 }
@media (min-width:750px) and (max-width:900px) {
  nav .logo{
    width: 17%;
  }
 }
@media (min-width:901px) and (max-width:1040px) {
  nav .logo{
    width: 14%;
  }
 }

 /****************/
 @media (max-width: 1040px) {
   nav ul{
    display: none;
    float: none;
    width: 100%;
    margin-top: 50px;
    text-align: center;
    li a{
      display: block;
      width: 100%;
    }
    
   }
   .container > span{
    display: block;
   }
 }
</style>