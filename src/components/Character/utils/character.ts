import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                // Color by exact GLTF node name for precise control
                const nodeName = mesh.name;

                const setColor = (hex: number) => {
                  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                  materials.forEach((mat: any) => { if (mat.color) mat.color.setHex(hex); });
                };

                // BODY.SHIRT = single mesh containing face+shirt → set to brown skin
                // The pink/purple rim lighting in the scene darkens the body area naturally
                if (nodeName === 'BODY.SHIRT') {
                  setColor(0x9b5e2a); // warm brown skin
                }
                // Other skin parts → same brown
                else if (['Ear.001', 'Hand', 'Neck', 'Plane.007'].includes(nodeName)) {
                  setColor(0x9b5e2a);
                }
                // Pants → black
                else if (nodeName === 'Pant') {
                  setColor(0x0d0d0d);
                }
                // Shoes → white/silver
                else if (nodeName === 'Shoe' || nodeName === 'Sole') {
                  setColor(0xe0e0e0); // white shoes
                }
                // Hair → very dark
                else if (nodeName === 'hair') {
                  setColor(0x111108);
                }
                // Keyboard body → dark grey
                else if (nodeName === 'Keyboard') {
                  setColor(0x2a2a2a);
                }
                // Keyboard keys → dark brownish wood
                else if (nodeName.startsWith('KEYS')) {
                  setColor(0x3a2010);
                }
                // Desk surface → white
                else if (nodeName === 'Plane.004') {
                  setColor(0xf0f0f0);
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
