const output = document.getElementById('output');
const input = document.getElementById('input');

const responses = {
  '你好': '你好！有什么关于动物的问题可以帮你解答吗？',
  '什么是狮子的科学名称？': '狮子的科学名称是 Panthera leo。',
  '鸟类有哪些不会飞的？': '有很多鸟类不会飞，比如企鹅、鸵鸟和几种鸭子。',
  '世界上最大的陆地动物是什么？': '世界上最大的陆地动物是非洲象。',
  '动物界最快的动物是什么？': '最快的动物是猎豹，它的速度可以达到每小时约112公里。',
  '谢谢': '不客气！如果还有其他问题，随时问我。',
  '再见': '再见，祝你有个美好的一天！'
};

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const question = input.value;
    output.innerHTML += `<div><strong>你:</strong> ${question}</div>`;
    input.value = '';
    if (responses.hasOwnProperty(question)) {
      setTimeout(function() {
        output.innerHTML += `<div><strong>ChatBot:</strong> ${responses[question]}</div>`;
        output.scrollTop = output.scrollHeight;
      }, 500);
    } else {
      setTimeout(function() {
        output.innerHTML += `<div><strong>ChatBot:</strong> 对不起，我不明白你的问题。</div>`;
        output.scrollTop = output.scrollHeight;
      }, 500);
    }
  }
});
