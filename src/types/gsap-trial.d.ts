declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(targets: any, vars?: any);
    split(propName?: string): any;
    revert(): any;
    kill(): any;
    chars: any[];
    words: any[];
    lines: any[];
    static selector: any;
  }
  export default SplitText;
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(vars?: any);
    static create(vars?: any): ScrollSmoother;
    static get(index?: any): ScrollSmoother;
    static refresh(immediately?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    refresh(immediately?: boolean): ScrollSmoother;
  }
  export default ScrollSmoother;
}

declare module "gsap-trial/Draggable" {
  export class Draggable {
    constructor(targets: any, vars?: any);
    static create(targets: any, vars?: any): Draggable;
  }
  export default Draggable;
}

declare module "gsap-trial/*";
