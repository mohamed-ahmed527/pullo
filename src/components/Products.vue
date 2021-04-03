<template>
  <div class="products">
    <div class="container">
      <h1> New Arrivals Products </h1>
      <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
    </div>
    
    <div class="parent">
      <div class="container">
        <div class="row">

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img9.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
            
          </div>

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img7.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img8.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img7.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img8.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-10">
            <div class="pro">
              <div class="pro_img">
                <img src="../assets/shoes-img9.png">
              </div>
              <div class="pro_text">
                <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
              </div>
              <p> Best Shoes </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"products"
}
</script>
<style lang="scss" scoped>
$grey_dark: #000b17 ;
$pink: #ff4e5b;
$grey_light:#dddddd7a;
.products{  
  margin-bottom: 150px;
  .container{
    >h1{
      color: $grey_dark;
      font-weight: bolder;
      font-size: 30px;
    }
    >p{
      font-size: 18px;
      width: 95%;
      color: grey;
      margin: 40px 0px;
    }
  }
  .parent{  
    background-color: $pink;
    padding: 70px 0px;
    .container{
      .row{
        .col-md-4{
          overflow: hidden;
          height: 350px;
          .pro{
            position: relative;
            padding: 30px 15px;
            background-color: white;
            margin: 30px 0px;
            overflow: hidden;
            >p{
              position: absolute;
              top: 15px;
              left: -34px;
              background-color: #455a64;
              transform: rotateZ(-38deg);
              font-size: 19px;
              padding: 5px 37px;
              color: white;
            }
            .pro_img{
              img{
                display: block;
                max-width: 70%;
                margin: auto;
              }
            }
            .pro_text{
              overflow: hidden;
              width: 80%;
              margin:auto;
              margin-top: 25px;
              span:first-of-type{
                float: left;
                img{ 
                  margin: 3px;
                }
              }
              span:last-of-type{
                float: right;
                font-size: 20px;
                font-family: cursive;
                span{
                  color: $pink;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>