import './style.css'; // ����������� �����
import goblinImage from './goblin.png'; // ����������� ����������� �������

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const boardSize = 4;
    const holeCount = boardSize * boardSize;
    const intervalTime = 1000; // �������� ����������� ������� � �������������

    let holes = []; // ������ ��� �������� ���� ����� (���������)
    let currentHoleIndex = -1; // ������ ������� ������, ��� ��������� ������
    let goblinElement; // DOM-������� �������

    // 1. �������� �������� ���� (4x4)
    function createBoard() {
        for (let i = 0; i < holeCount; i++) {
            const hole = document.createElement('div');
            hole.classList.add('hole');
            hole.dataset.index = i; // ��������� data-������� ��� �������������
            gameBoard.appendChild(hole);
            holes.push(hole);
        }
    }

    // 2. �������� �������� ��������� (�������)
    function createGoblin() {
        goblinElement = document.createElement('img');
        goblinElement.src = goblinImage; // ������������� ���� � �����������
        goblinElement.alt = 'Goblin';
        goblinElement.classList.add('goblin');
    }

    // 3. ����������� ������� � ��������� "���������"
    function moveGoblin() {
        let newHoleIndex;
        do {
            // ���������� ��������� ������ �� 0 �� holeCount - 1
            newHoleIndex = Math.floor(Math.random() * holeCount);
        } while (newHoleIndex === currentHoleIndex); // ����������, ��� ����� ����� �� ��������� � �������

        // ������� ����� ������ �� �������
        const newHole = holes[newHoleIndex];

        // !!! �����: �� ���������� removeChild!
        // ������ ��������� ������� ������� � ����� ������������ ������.
        // ������� ������������� "��������" ������� �� ��� ������� ��������
        // ����� ���, ��� ���������� ��� � ������.
        newHole.appendChild(goblinElement);

        currentHoleIndex = newHoleIndex; // ��������� ������� ������
    }

    // ������������� ���� ��� �������� ��������
    createBoard();
    createGoblin();
    moveGoblin(); // ������ ���������� �������

    // ������������� ����������� ������� � ������� setInterval
    setInterval(moveGoblin, intervalTime);
});