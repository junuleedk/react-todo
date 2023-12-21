// 사이즈 정보가 들어오면 밑에 사이즈 정보 전달 없을 땐 기본값 s를 전달하겠다라는 뜻
export function getImageUrl(person, size = 'b') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg}`;
}
