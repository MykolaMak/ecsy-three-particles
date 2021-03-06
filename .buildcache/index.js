export * from "./components/index";
export * from "./systems/index";
export * from "./three/ParticleEmitter";
export * from "./three/ParticleMesh";
export * from "./Keyframes";
export * from "./Math";
export * from "./Types";
export * from "./Util";
import { isBrowser } from "./Util";
const DEFAULT_OPTIONS = {
    mouse: true,
    keyboard: true,
    touchscreen: true,
    gamepad: true,
    debug: false
};
export function initializeParticleSystem(world, options = DEFAULT_OPTIONS) {
    if (options.debug)
        console.log("Initializing particle system...");
    if (!isBrowser)
        return console.error("Couldn't initialize particles, are you in a browser?");
    if (window && options.debug)
        window.DEBUG_INPUT = true;
    if (options.debug) {
        console.log("Registering particle system with the following options:");
        console.log(options);
    }
    // TODO: Do stuff here
    if (options.debug)
        console.log("INPUT: Registered particle system.");
}
