import React from "react";
import styled from "styled-components";

export default function IntroMainSec_4() {
  return (
    <div>
      <div class="section_4">
        <div class="main_section_titleArea">
          <h1 class="main_section_title">POINT 3</h1>
        </div>
        <div class="main_section_sub_titleArea">
          <h1>
            JustSell <b>창업 비교분석</b>
          </h1>
        </div>
        <div class="vsArea">
          <div class="vsArea_top_title">
            <div class="vsArea_top_title_left">
              <img src="./assets/images/main/vs_top_icon_1.png" alt="" />
              <span>오프라인 창업</span>
            </div>
            <img
              class="vs_title_img"
              src="./assets/images/main/vs_img.png"
              alt=""
            />
            <div class="vsArea_top_title_right">
              <img src="./assets/images/main/vs_top_icon_2.png" alt="" />
              <span>JustSell 창업</span>
            </div>
          </div>
          <div class="vs_contents">
            <div class="vs_contents_wrapper vs_contents_wrapper_1">
              <div class="vs_contents_title">
                <h1>창업비용 비교</h1>
                <div class="vs_contents_title_line"></div>
              </div>
              <div class="vs_contents_text vs_contents_text_left">
                <h1>프랜차이즈 가맹 창업비용</h1>
                <h2>
                  평균 <b>1억 6천만원</b> 소요
                </h2>
                <h3>
                  "프랜차이즈산업현황보고서
                  <br />
                  5,044개 브랜드 기준 평균 "
                </h3>
              </div>
              <h2 class="vs_contents_text_vs">VS</h2>
              <div class="vs_contents_text vs_contents_text_right">
                <h1>JustSell 가맹 창업비용</h1>
                <h2>
                  평균 <b>2천만원</b> 소요
                </h2>
                <h3>
                  "JustSell 수익보장 시스템 <br />
                  기준 창업비용 참고 "
                </h3>
              </div>
            </div>
            <div class="vs_contents_wrapper">
              <div class="vs_contents_title">
                <h1>창업 준비기간 비교</h1>
                <div class="vs_contents_title_line"></div>
              </div>
              <div class="vs_contents_text vs_contents_text_left">
                <h1>프랜차이즈 창업 준비기간</h1>
                <h2>
                  평균 <b>3개월</b> 소요
                </h2>
              </div>
              <h2 class="vs_contents_text_vs vs_contents_text_vs_position">
                VS
              </h2>
              <div class="vs_contents_text vs_contents_text_right">
                <h1>JustSell 창업 준비기간</h1>
                <h2>
                  평균 <b>2일</b> 소요
                </h2>
              </div>
            </div>
            <div class="vs_contents_wrapper">
              <div class="vs_contents_title">
                <h1>창업 위험요소 비교</h1>
                <div class="vs_contents_title_line"></div>
              </div>
              <div class="vs_contents_text vs_contents_text_left">
                <h2>
                  <b>재고 및 월세, 관리비 등</b>
                </h2>
                <span>위험요소 존재</span>
              </div>
              <h2 class="vs_contents_text_vs vs_contents_text_vs_position_2">
                VS
              </h2>
              <div class="vs_contents_text vs_contents_text_right">
                <h2>
                  <b>위험없는</b>
                </h2>
                <span>창업</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_middle_banner">
        <div class="main_middle_banner_line">
          <p>
            <img src="./assets/images/main/main_light_icon.png" alt="" />
          </p>
        </div>
        <span>
          적은 금액으로 효율적인 창업을 원하신다면, JustSell을 선택하세요.
        </span>
      </div>
    </div>
  );
}
