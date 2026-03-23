// Seleciona os elementos do DOM
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Função para criar um novo item da lista
const addTask = () => {
    const taskText = input.value.trim(); // Remove espaços extras

    // Não adiciona se o campo estiver vazio
    if (!taskText) {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Cria o elemento <li>
    const li = document.createElement('li');

    // Cria um texto para a tarefa
    li.textContent = taskText;

    // Cria o botão "X" para remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Dentro da função addTask, após criar o <li> e o botão removeBtn:
    li.addEventListener('click', (event) => {
        // Se o clique foi no botão "X", não marca como concluído
        if (event.target === removeBtn) return;
        li.classList.toggle('completed');
        });

        // Adiciona o botão ao <li>
        li.appendChild(removeBtn);

        // Adiciona o <li> na lista
        taskList.appendChild(li);

        // Limpa o campo de texto e foca nele para nova tarefa
        input.value = '';
        input.focus();
    };

    // Evento do botão "Adicionar"
    addBtn.addEventListener('click', addTask);

    // Permite adicionar a tarefa ao pressionar Enter no campo de texto
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
