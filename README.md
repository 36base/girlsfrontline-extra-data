# GirlsFrontline Extra Data

> 본 모듈은 인형 대사 및 별명 데이터만 포함되어 있습니다.
> 인형 스탯 등 Core 데이터는 [`girlsfrontline-core`](https://github.com/36base/girlsfrontline-core)
> 저장소를 참고 바랍니다.

## 사용 예시

```js
const { alias, script } = gfextradata({ locale: 'ko-KR' });

console.log(alias);
// {"doll":{"1":["콜트","콜라"],"2":["운메이","운명이","운명"] ...}, "equip": {...}, "fairy": {...}}

console.log(script['MG4'].introduce[0]);
// "처음 제 이름은 MG43이었어요. FN의 Minimi에게 안타깝게 지는 바람에 해외발주는 뺏겼지만, 독일군에 채용됨과 동시에 MG4로 개명했어요.\n 기본적으로, 저의 연구개발이 시작된 이유는 G11이 시장에서 적응하지 못했기 때문에, 회사가 지침에 변화를 주면서 생긴 거예요. 시장에서 각종 우수한 무기의 분석에 초점을 맞춰, 최종적으로 제가 탄생하게 되었어요."
```

alias 출력의 `1`, `2` 등은 `girlsfrontline-core` 의 데이터중 `id` 참고 바랍니다.

## `i18n/`

core 레포에 부족한 i18n 데이터 수동으로 채우거나, 덮어 씌우는 용도

## 데이터

`data` 디렉토리 구조

```text
data
  locale
    {locale}
      alias.json // 각 나라별 별명 (빌드 시 `build/data/alias.json` 하나로 합쳐짐)
      NewCharacterVoice.json // 대사 (`asset_textes` 추출했을때 나오는 파일 그대로 사용)  
```

### 별명 데이터 예시

```json
{
  "doll": {
    "142": ["HOXY"]
  },
  "equip": {
    "1": ["옵티컬"]
  },
  "fairy": {
    "1": ["용사"]
  }
}
```

### 대사 데이터 예시 (축약)

`357` 등은 `girlsfrontline-core` 의 데이터중 `codename` 참고 바람

```json
{
  "357": {
    "dialogue1": ["배가 고파졌어~"],
    "soulcontract": [
      "에? 지휘관도 정말...갑자기 그런 걸...진심으로 말하는 거야?",
      "으응! 당연히 OK야! 오늘의 나는 엄청 행복한걸!",
      "허그해도 괜찮아?"
    ],
    "introduce": [
      "안녕, 지휘관! 나는 아스트라 357이야...."
    ],
    "gain": ["잘 부탁드릴게요."]
  }
}
```