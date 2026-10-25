export const tool = {
  "id": "E011",
  "title": "평판 전도 열전달률 계산기",
  "inputs_text": "열전도율 k [W/(m·K)], 면적 A [m²], 두께 L [m], 양면 온도차 ΔT [K]",
  "formula": "Q̇ = k A ΔT / L",
  "output_text": "전도 열전달률 Q̇ [W]",
  "assumptions": "k,A,L>0. 정상 1차원·등물성 평판에 한정하며 접촉열저항·열발생·가장자리 손실은 제외한다. ΔT의 K와 °C 차이는 같지만 절대온도와 혼동하지 않는다.",
  "purpose": "벽 열전도 계산 / 단열판·전도 실험 검산",
  "sources": [
    {
      "label": "OpenStax · Mechanisms of Heat Transfer",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer"
    }
  ],
  "slug": "eng-wall-conduction",
  "category": "열",
  "result_label": "평판 전도 열전달률 Q̇",
  "result_dimension": "power",
  "fields": [
    {
      "key": "k",
      "label": "열전도율 k",
      "dimension": "conductivity",
      "example": 0.5,
      "constraint": "positive",
      "display_unit": "WmK",
      "display_value": "0.5"
    },
    {
      "key": "a",
      "label": "전도 면적 A",
      "dimension": "area",
      "example": 2,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "2"
    },
    {
      "key": "l",
      "label": "평판 두께 L",
      "dimension": "length",
      "example": 0.1,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.1"
    },
    {
      "key": "dt",
      "label": "양면 온도차 ΔT",
      "dimension": "deltaT",
      "example": 20,
      "constraint": "signed",
      "display_unit": "Kdiff",
      "display_value": "20"
    }
  ],
  "site": "https://nanalab.kr/eng-wall-conduction/",
  "repository": "https://github.com/NaNaCompany/eng-wall-conduction",
  "condition": "",
  "output_unit": "W"
};
