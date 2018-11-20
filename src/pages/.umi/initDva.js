import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('S:/Development/ReactProject/salary-management/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('S:/Development/ReactProject/salary-management/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('S:/Development/ReactProject/salary-management/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('S:/Development/ReactProject/salary-management/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('S:/Development/ReactProject/salary-management/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('S:/Development/ReactProject/salary-management/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('S:/Development/ReactProject/salary-management/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('S:/Development/ReactProject/salary-management/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('S:/Development/ReactProject/salary-management/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('S:/Development/ReactProject/salary-management/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('S:/Development/ReactProject/salary-management/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('S:/Development/ReactProject/salary-management/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('S:/Development/ReactProject/salary-management/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('S:/Development/ReactProject/salary-management/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('S:/Development/ReactProject/salary-management/src/pages/Account/Settings/models/geographic.js').default) });
