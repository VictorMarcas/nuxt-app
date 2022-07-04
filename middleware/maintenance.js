export default function ({ env, redirect, route }) {
  const { maintenance } = env

  if (maintenance && route.path !== '/maintenance') {
    return redirect('/maintenance')
  }
  if (maintenance === false && route.path === '/maintenance') {
    return redirect('/')
  }
}
