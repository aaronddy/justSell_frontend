import React from "react";
import styled from "styled-components";

export default function IntroMainSec_3() {
  return (
    <div>
      <div class="main_section_3">
        <div class="main_section_titleArea">
          <h1 class="main_section_title">POINT 2</h1>
        </div>
        <div class="main_section_sub_titleArea">
          <h1>
            수익률이 <b>높은가요?</b>
          </h1>
        </div>
        <div class="main_textBox">
          <div class="section_3_textBox">
            <img src="./assets/images/main/main_box_icon_1.png" alt="" />
            <h1>
              연 평균 기대수익률<b>40%</b>이상
            </h1>
          </div>
        </div>
        <span class="main_section_3_sub_title main_section_3_sub_title_pc">
          저스트셀의 <b>‘인공지능 기반 판매최적화 알고리즘'</b>을 통해
          <br />더 높은 수익률로 판매진행
        </span>
        <span class="main_section_3_sub_title main_section_3_sub_title_m">
          저스트셀의
          <br />
          <b>‘인공지능 기반 판매최적화 알고리즘'</b>을 통해
          <br />
          더 높은 수익률로 판매진행
          <br />
        </span>
        <div class="main_section_3_sel_box">
          <ul class="main_section_3_sel_box_btns">
            <li class="main_section_3_sel_box_btns_active_1">
              <span>Keyword Optimization</span>
            </li>
            <li>
              <span>Sales Forcasting</span>
            </li>
            <li>
              <span>Image Retrival</span>
            </li>
          </ul>
          <div class="main_section_3_sel_box_contents">
            <div class="main_section_3_sel_box_contents_titleArea">
              <h1 class="main_section_3_data_title">Keyword Optimization</h1>
              <h2 class="main_section_3_data_contents">
                1억건 이상의 자체 판매데이터와 실시간 트렌드에 대한
                <br />
                딥러닝 분석을 통해 최적의 상품 검색 키워드들을 도출합니다.
              </h2>
            </div>
            <div class="main_section_3_sel_box_contents_contentsArea">
              <div class="contentsArea_img_wrap">
                <img
                  class="contentsArea_img_wrap_pc"
                  src="./assets/images/main/main_box_img_1.png"
                  alt=""
                />
                <img
                  class="contentsArea_img_wrap_m"
                  src="./assets/images/main/main_box_img_1_m.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="main_textBox main_textBox_margin">
          <span>
            상품 판매에 따른 정산 주기가 평균 1달이므로, <b>12번 이상</b>의
            복리효과
          </span>
        </div>
      </div>
    </div>
  );
}
