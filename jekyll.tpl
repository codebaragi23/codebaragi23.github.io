{% extends 'markdown.tpl' %}

{%- block header -%}
---
{% if ':' in nb.cells[0].source[2:] -%}
title: "{{ nb.cells[0].source[2:] }}"
{% else -%}
title: {{ nb.cells[0].source[2:] }}
{%- endif %}
---
{%endblock header%}


{% block in_prompt %}
<div class="prompt input_prompt">
In&nbsp;[{{ cell.execution_count }}]:
</div>
{% endblock in_prompt %}

{% block input %}
<div class="input_area" markdown="1">
{{- super() -}}
</div>
{% endblock input %}

{% block stream %}
{:.output_stream}
```
{{ output.text -}}
```
{%- endblock stream -%}

{% block data_text scoped %}
{:.output_data_text}
```
{{ output.data['text/plain'] }}
```
{%- endblock data_text -%}

{% block traceback_line %}
{:.output_traceback_line}
`{{ line | strip_ansi }}`
{% endblock traceback_line  %}

{% block data_html -%}
<div markdown="0">
{{ output.data['text/html'] }}
</div>
{%- endblock data_html %}

{% block markdowncell scoped %}
{{ super() }}
{% endblock markdowncell %}