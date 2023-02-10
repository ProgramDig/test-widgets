export function toggleLabel(e: any, state: boolean) {
    const children = e.target.parentNode.children;
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);
    if (state) children[children.length / 2 + index].style.display = 'block';
    else children[children.length / 2 + index].style.display = 'none';
}