<template>
  <div class="contact">
    <div class="container">
      <h1>Contact Now</h1>
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="info">
            <form>
              <div class="row">
                <div class="col-lg-12 col-xs-12">
                  <input type="text">
                  <span>Name</span>
                </div>
                <div class="col-lg-12 col-xs-12">
                  <input type="number">
                  <span> Phone </span>
                </div>
                <div class="col-lg-12 col-xs-12">
                  <input type="email">
                  <span> Email </span>
                </div>
                <div class="col-lg-12 col-xs-12">
                  <textarea></textarea>
                  <span> Message </span>
                </div>
              </div>  
              <button type="submit"> Send </button>        
            </form>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="contact_img">
            <img src="../assets/shop-banner.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"contact"
}
</script>
<style lang="scss" scoped>
$grey_dark: #000b17 ;
$pink: #ff4e5b;
.contact{
  margin-bottom: 50px;
  .container{
    >h1{
      color: $grey_dark;
      font-weight: bolder;
      font-size: 30px;
      margin-bottom: 40px;
    }
    .row{
      .col-md-6{
        /*****form****/
        .info{
          margin-bottom: 50px;
          form{
            .row{
              .col-xs-12{
                position: relative;
                margin-bottom: 30px;
                input{
                  display: block;
                  width: 98%;
                  padding: 1%;
                  padding-left: 4px;
                  outline-color: #e85560;
                }
                input:focus ~span{
                  top: -25px;                  
                }
                textarea{
                  width: 98%;
                  padding:0px 1%;
                  padding-left: 4px;
                  outline-color: #e85560;
                  height: 150px;
                }
                textarea:focus ~span{
                  top: -25px;                  
                  transition: ease-in-out 0.5s all;
                }
                span{
                  position: absolute;
                  top: 7px;
                  left: 20px;
                  transition: 0.5s ease-in-out all;
                }   
              }
            }
            button{
              border: 0px;
              padding: 10px 40px;
              background-color: $pink;
              font-size: 18px;
              color: white;
            }
          }
        }
//end of form
      .contact_img{
        img{
          width: 100%;
        }
      }        
      }    
    }
  }
}
</style>