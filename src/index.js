import './style.css'; // Импортируем стили
import goblinImage from './goblin.png'; // Импортируем изображение гоблина

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const boardSize = 4;
    const holeCount = boardSize * boardSize;
    const intervalTime = 1000; // Интервал перемещения гоблина в миллисекундах

    let holes = []; // Массив для хранения всех ячеек (отверстий)
    let currentHoleIndex = -1; // Индекс текущей ячейки, где находится гоблин
    let goblinElement; // DOM-элемент гоблина

    // 1. Создание игрового поля (4x4)
    function createBoard() {
        for (let i = 0; i < holeCount; i++) {
            const hole = document.createElement('div');
            hole.classList.add('hole');
            hole.dataset.index = i; // Добавляем data-атрибут для идентификации
            gameBoard.appendChild(hole);
            holes.push(hole);
        }
    }

    // 2. Создание элемента персонажа (гоблина)
    function createGoblin() {
        goblinElement = document.createElement('img');
        goblinElement.src = goblinImage; // Устанавливаем путь к изображению
        goblinElement.alt = 'Goblin';
        goblinElement.classList.add('goblin');
    }

    // 3. Перемещение гоблина в случайное "отверстие"
    function moveGoblin() {
        let newHoleIndex;
        do {
            // Генерируем случайный индекс от 0 до holeCount - 1
            newHoleIndex = Math.floor(Math.random() * holeCount);
        } while (newHoleIndex === currentHoleIndex); // Убеждаемся, что новое место не совпадает с текущим

        // Находим новую ячейку по индексу
        const newHole = holes[newHoleIndex];

        // !!! Важно: не используем removeChild!
        // Просто добавляем элемент гоблина в новую родительскую ячейку.
        // Браузер автоматически "открепит" элемент от его старого родителя
        // перед тем, как прикрепить его к новому.
        newHole.appendChild(goblinElement);

        currentHoleIndex = newHoleIndex; // Обновляем текущий индекс
    }

    // Инициализация игры при загрузке страницы
    createBoard();
    createGoblin();
    moveGoblin(); // Первое размещение гоблина

    // Запланировать перемещение гоблина с помощью setInterval
    setInterval(moveGoblin, intervalTime);
});