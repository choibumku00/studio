# **App Name**: Similary

## Core Features:

- Category Selection: Display a list of available similarity game categories on the main page.
- Answer Input with Autocomplete: Enable users to input their answer in a text field with an auto-completion suggestions.
- Similarity Display: Display the similarity score and ranking of the submitted answer.
- Answer History: Show a list of previously submitted answers with their rankings.

## Style Guidelines:

- Primary color: A calming blue (#3498db) to create a welcoming atmosphere.
- Secondary color: A light gray (#ecf0f1) for backgrounds and subtle UI elements.
- Accent: A vibrant green (#2ecc71) for the submit button, interactive elements, and highlighting correct answers.
- Use a clean and modern layout with a focus on readability and user-friendliness.
- Use clear and consistent icons to represent different game categories and UI actions.
- Subtle animations and transitions to provide feedback and enhance the user experience.

## Original User Request:
'유사도 게임 사이트 기술 명세서'
•	프로젝트 명: 유사도 게임 플랫폼
•	목표: 다양한 카테고리(국기, 배우, 단어 등)의 유사도 게임을 존재하고,  "오늘의 정답"을 맞추는 서비스
•	메인 페이지 특징:
o	메인 페이지에서 카테고리별 게임 선택 가능
o	로그인 버튼이 우측 상단에 존재
o	각 게임을 선택 시 게임 페이지로 이동
•	게임 페이지 특징:
o	해당 게임의 이름이 상단에 위치
o	정답 입력 칸과 제출 버튼이 존재
o	자동완성 기능을 통한 입력 편의성 제공
o	제출 시, db에 저장된 유사도와 순위를 보여줌
o	이전에 적은 정답들은 순위에 따라 아래에 리스트됨
•	요구사항
o	프론트엔드: Nextjs
o	백엔드: fastapi
o	반응형 웹사이트로 만들것
o	UI를 이쁘게 만들 것
o	db에 데이터가 필요할 경우 우선 demo 데이터를 만들어 코딩
  