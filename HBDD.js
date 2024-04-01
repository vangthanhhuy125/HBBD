document.getElementById('openLetterButton').addEventListener('click', function() {
    const letterContent = `
        <h1>Sinh nhật của một bạn dễ thương</h1>
        <p>Cá Cảnh :>>> 🥰🐟🎏💝</p>
        <img src="Hình ảnh động chúc mừng sinh nhật đẹp và ý nghĩa P1.gif" alt="Ảnh bức thư" width="200" height="150" style="border: 1px solid black;">
        <p>Và thế là lại thêm một năm đã đến, lại thêm một tuổi mới cho thanh xuân của em 🍫</p>
        <p>    Chúc em có một tuổi mới thêm nhiều niềm vui, thêm nhiều năng lượng tích cực 🌷</p>
        <p>  Mãi giữ cho mình một tâm hồn trong sáng, một đức tính thiện lương ✨ </p>
        <p> Chúc em thanh xuân này sẽ có những điều ý nghĩa đến với em🍀</p>
        <p> Làm những việc mà em muốn, mang lại nhiều tích cực cho mình.  🥟</p>
        <p> Thuận lợi và Bình an. Trên con đường tương lai sẽ là một người thành công📓</p>
        <p> Bên ngoài có tiền, bên trong có người thương em❤️</p>
        <h2>  Web tuy hơi xấu hihi, dần dần điều gì cũng sẽ hoàn thiện hơn, những mong là có thể vượt qua </h2>
        `;
    const letterContentElement = document.getElementById('letterContent');
    letterContentElement.innerHTML = letterContent;
    letterContentElement.classList.remove('hidden');
});
