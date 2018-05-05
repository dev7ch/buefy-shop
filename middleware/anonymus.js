import firebase from 'firebase'

export default function ({
  isServer,
  redirect
}) {
  if (isServer && !firebase.apps.length) {
    redirect('/account/login')
  }
}
