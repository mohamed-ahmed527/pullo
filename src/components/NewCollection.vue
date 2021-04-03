<template>
  <div class="collection">
    <div class="container">
      <h1> New Collection </h1>
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <div class="row">
        <div class="col-md-5 col-sm-11 col-xs-10">
          <div class="collec1">
            <div class="collec1_img">
              <img src="../assets/shoes-img1.png">
            </div>
            <p> Men Sports </p>
            <div class="collec1_text">
              <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-sm-11 col-xs-10">
          <div class="collec1">
            <div class="collec1_img">
              <img src="../assets/shoes-img2.png">
            </div>
            <p> Men Sports </p>
            <div class="collec1_text">
              <span>
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
                <img src="../assets/star-icon.png">
              </span>
              <span> $ <span>90</span> </span>
            </div>
          </div>
        </div>
      </div>
      <button> <a href="#"> See More </a> </button>
      <h1> Racing Boots </h1>
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <div class="racing">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="race_img">
              <img src="../assets/shoes-img3.png">
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="race_text">
              <p><span>Sale</span> JOGING <span>SHOES</span> $ <span>100</span></p>
              <button> <a href="#"> See More </a> </button>
            </div>
          </div>
      </div>
    </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name:"collection"
}
</script>
<style lang="scss" scoped>
$grey_dark: #000b17 ;
$pink: #ff4e5b;
.collection{
  margin: 150px 0px;
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
    >.row{
      justify-content: space-between;
      margin-right: 0px;
      margin-left: 0px;
      .col-md-5{
        overflow: hidden;
        padding: 0px;
        box-shadow: 0px 0px 10px 1px #ddd;
        margin: 0px;
        margin-bottom: 50px;
        .collec1{                  
          .collec1_img{
            margin: 30px 0px;
            img{
              display: block;
              width: 60%;
              margin: auto;
            }
          }
          p{
            position: absolute;
            top: 24px;
            left: -38px;
            transform: rotateZ(-45deg);
            padding: 5px 32px;
            background-color: $pink;
            color: white;
            font-size: 18px;
          }
          .collec1_text{
            overflow: hidden;
            margin: 30px 0px;
            padding: 0px 30px;
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
    button{
      border:0px;
      margin-top: 50px;
      margin-bottom: 70px;
      padding: 0px;
      a{
        font-size: 18px;
        text-decoration: none;
        padding: 10px 45px;
        background-color: $pink;
        color: white;
      }  
    }
    .racing{
      background-color: #ddd;
      padding: 40px 20px;
      .row{
        margin-left: 0px;
        margin-right: 0px;
        .col-md-6{
          .race_img{
            img{
              display: block;
              width: 85%;
              margin: auto;
            }
          }
          .race_text{
            p{
              font-size: 50px;
              width: 38%;
              margin: auto;
              font-weight: 700;
              margin-top: 50px;
              span{
                color: $pink;
              }
            }
            button{
              display: block;
              margin: auto;
              border:0px;
              margin-top: 50px;
              margin-bottom: 70px;
              padding: 0px;
              a{
                font-size: 18px;
                text-decoration: none;
                padding: 10px 45px;
                background-color: $pink;
                color: white;
              } 
            }
          }
        }
      }
    }
  }
}

</style>