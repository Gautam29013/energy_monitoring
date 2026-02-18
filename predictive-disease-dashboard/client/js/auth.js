// Lightweight auth helpers for client
async function login(credentials){
  const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || data.error || 'Login failed');
  // store token and role
  localStorage.setItem('token', data.token);
  localStorage.setItem('role', data.role || 'patient');
  // redirect
  location.href = 'dashboard.html';
}

function logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  location.href = 'index.html';
}

function getAuthHeaders(){
  const token = localStorage.getItem('token');
  return token ? { Authorization: 'Bearer ' + token } : {};
}

async function fetchMe(){
  const res = await fetch('/api/auth/me', { headers: getAuthHeaders() });
  if (!res.ok) throw new Error('Not authenticated');
  return await res.json();
}

// expose in global scope for pages
window.login = login;
window.logout = logout;
window.fetchMe = fetchMe;