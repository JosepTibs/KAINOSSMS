// Sample data
const teachers = [
  { name: 'Jane Doe', email: 'janedoe@gmail.com', classes: 'Math-6, Science-6' },
  { name: 'John Smith', email: 'johnsmith@gmail.com', classes: 'English-7, History-7' },
  { name: 'Maria Garcia', email: 'maria.garcia@gmail.com', classes: 'Math-8, Chemistry-8' },
];

// Select container
const container = document.getElementById('teacher-container');

// Loop through teachers and generate HTML
teachers.forEach((teacher) => {
  const card = document.createElement('div');
  card.className = 'bg-white p-6 rounded-2xl shadow hover:shadow-lg transition';

  card.innerHTML = `
    <div class="flex flex-col space-y-3">
      <h2 class="text-xl font-semibold text-gray-800">${teacher.name}</h2>
      <p class="text-gray-600 text-sm">${teacher.email}</p>
      <p class="text-gray-700 text-sm"><span class="font-medium text-blue-600">Classes:</span> ${teacher.classes}</p>
      <button class="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">View Profile</button>
    </div>
  `;

  container.appendChild(card);
});
