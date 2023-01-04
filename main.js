import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry"

const scene = new THREE.Scene()
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth,
}
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
)
const renderer = new THREE.WebGL1Renderer({
  canvas: document.getElementById("logo"),
  alpha: true,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)
camera.position.setZ(30)
renderer.render(scene, camera)
const geometry = new RoundedBoxGeometry(
  sizes.width / 200,
  sizes.width / 200,
  sizes.width / 200,
  5,
  (sizes.width / sizes.height) * 0.75
)

const texture = new THREE.TextureLoader().load("./public/assets/BNPLogo.png")
// texture.repeat.set(0.1, 0.1)
const materiel = new THREE.MeshStandardMaterial({
  //   color: 0x004d2a,
  map: texture,
})

const box = new THREE.Mesh(geometry, materiel)
scene.add(box)
const pointLight = new THREE.PointLight(0xffffff)
const ambientLight = new THREE.AmbientLight(0xffffff)
pointLight.position.set(20, 20, 20)
scene.add(pointLight, ambientLight)

// ---------------------------------
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)
})
// --------------------------------------
function animate() {
  renderer.render(scene, camera)
  box.rotation.x += 0.01
  box.rotation.y += 0.005
  box.rotation.z += 0.005
  requestAnimationFrame(animate)
}
animate()
