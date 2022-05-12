#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    FragColor.x = 1.0 - FragColor.x;
    FragColor.y = 1.0 - FragColor.y;
    FragColor.z = 1.0 - FragColor.z;
    FragColor.a = 1.0;
}
