#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newTex = ((2.0f * texcoord) -vec2(1,1));
    float mag = length(newTex);
    float radius = pow(mag, 1.5);
    vec2 offset = texcoord * (sin(radius*30.0 - time * 5.0)+0.5)/60.0;
    vec2 fTex = texcoord+offset;
    FragColor = texture(image, fTex);
}
