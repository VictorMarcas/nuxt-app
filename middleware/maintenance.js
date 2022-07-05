export default function ({$config: { maintenance }, redirect, route }) {
  if (maintenance && route.path !== '/maintenance') {
    return redirect('/maintenance')
  }
  if (!maintenance && route.path === '/maintenance') {
    return redirect('/')
  }
}
