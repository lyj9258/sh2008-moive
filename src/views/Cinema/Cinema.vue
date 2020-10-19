<template>
  <div class="main">
    <div class="cinema-list">
      <header>
        <div class="left">
          <div class="city">
            <span>{{}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
        </div>
        <div class="title">
          <div>影院</div>
        </div>
        <div class="right">
          <div>
            <div class="toCinemaSearch">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <div class="cinema-list-tag">
        <div class="cinema-list-tag-name">
          <label class>
            全城
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
              style="display: none"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
            />
          </label>
          <label class="">
            APP订票
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
              style="display: none"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
            />
          </label>
          <label class="">
            最近去过
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
              style="display: none"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt=""
              height="3px"
              width="6px"
            />
          </label>
        </div>
      </div>
      <div class="cinema-layer"></div>
      <div class="cinema-banner-wrap">
        <ul class="cinema-list">
          <li class="cinema-banner-item">
            <div class="name">
              <span class="title">【上海】SFC上影影城电影兑换券</span>
              <span class="icon">影院券</span>
            </div>
            <div class="type">【上海】SFC上影影城电影兑换券</div>
          </li>
        </ul>
      </div>
      <div class="cinema-list-wrap">
        <ul class="cinema-list">
          <div
            class="cinema-list-item"
            v-for="(item, index) in cinemas"
            :key="index"
          >
            <a href="#/cinema/1000/film" class="cinema-item-wrap">
              <div class="cinema-info-lf cinema-info">
                <span class="cinema-name">SFC上影影城（新世界店）</span>
                <img
                  src="data:image/png;base64,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"
                  alt="去过"
                  class="isVisted"
                />
                <span class="cinema-address"
                  >上海市黄浦区南京西路2-68号新世界12楼</span
                >
              </div>
              <div class="cinema-info-rt cinema-info">
                <div>
                  <span class="cinema-lowPrice price-fmt">
                    <i>￥</i>
                    <span class="interge" style="font-size: 15px">33</span>
                    <span style="display: none">.</span>
                    <span class="decimal" style="font-size: 10px"></span>
                    <span style="display: none">.</span>
                    <span class="decimal" style="font-size: 10px; display: none"
                      >00</span
                    >
                  </span>
                  <span class="upon">起</span>
                </div>
                <span class="cinema-gpsAddress">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX"
                    alt="距离"
                    style="display: none"
                  />
                  <strong>距离未知</strong>
                </span>
              </div>
            </a>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { cinemaListData } from "@/api/api";
export default {
  data() {
    return {
      cinemas: [],
    };
  },
  async mounted() {
    let ret = await cinemaListData();
    // this.cinemas = ret.data.data.cinemas;
  },
};
</script>
<style lang="scss" scoped>
.cinema-list {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 2000;
    .left {
      min-width: 15%;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      margin-left: 15px;
      .city {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        span {
          display: inline-block;
          font-size: 13px;
          max-width: 58px;
          height: 16px;
          line-height: 16px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 5px;
          color: #191a1b;
        }
        img {
          vertical-align: middle;
          width: 6px;
          height: 3px;
        }
      }
    }
    .title {
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      -webkit-box-flex: 1;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      div {
        color: #191a1b;
      }
    }
    .right {
      width: 15%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin-right: 15px;
      div {
        width: 100%;
        text-align: right;
        img {
          vertical-align: middle;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  .cinema-list-tag {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
    .cinema-list-tag-name {
      position: relative;
      label {
        float: left;
        width: 33.3%;
        line-height: 49px;
        font-size: 14px;
        color: #191a1b;
        letter-spacing: -0.2px;
        img {
          vertical-align: middle;
          padding-left: 2px;
        }
      }
    }
  }
  .cinema-list-tag::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
  .cinema-layer {
    padding-top: 94px;
  }
  .cinema-banner-wrap {
    .cinema-list {
      list-style: none;
      padding: 0;
      margin: 0;
      .cinema-banner-item {
        padding: 15px;
        position: relative;
        background-color: #fff;
        .name {
          font-size: 13px;
          color: #18191a;
          position: relative;
          .icon {
            color: #ffb245;
            margin-left: 7px;
            font-size: 10px;
            padding: 0 6px;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .icon::after {
            content: " ";
            transform: scale(0.5);
            position: absolute;
            border: 1px solid #ffb245;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;
            border-radius: 4px;
          }
        }
        .type {
          margin-top: 5px;
          font-size: 10px;
          color: #797d82;
        }
      }
      .cinema-banner-item::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #ededed;
        color: #ededed;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
      }
    }
  }
  .cinema-list-wrap {
    color: #333;
    outline: none;
    text-decoration: none;
    padding-bottom: 49px;
    z-index: 100;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      .cinema-list-item {
        position: relative;
        background-color: #fff;
        padding: 15px;
        .cinema-item-wrap {
          width: 100%;
          display: flex;
          -webkit-box-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          align-items: center;
          color: #333;
          text-decoration: none;
          .cinema-info-lf {
            width: calc(100% - 65px);
            text-align: left;
            padding-right: 15px;
            float: left;
            span {
              display: block;
              max-width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              float: left;
            }
            .cinema-name {
              color: #191a1b;
              font-size: 15px;
              float: left;
            }
            .isVisted {
              display: none;
              width: 32px;
              height: 16.5px;
              margin-bottom: -6px;
              margin-left: 4px;
            }
            .cinema-address {
              color: #797d82;
              font-size: 12px;
              margin-top: 5px;
            }
          }
          .cinema-info-rt {
            width: 70px;
            text-align: center;
            float: right;
            margin-right: -5px;
            .price-fmt {
              float: none !important;
              font-size: 15px;
              color: #ff5f16;
              height: 0 !important;
              display: inline-table !important;
            }
            .upon {
              color: #ff5f16;
              font-size: 10px;
            }
            .cinema-gpsAddress {
              display: block;
              font-size: 11px;
              color: #797d82;
              margin-top: 5px;
              img {
                width: 13px;
                height: 17.5px;
                margin: 0 auto;
                margin-top: -30px;
              }
              strong {
                font-weight: 400;
                display: block;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
