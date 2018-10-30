</script>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">bokeh.models</span> <span class="k">import</span> <span class="n">ColumnDataSource</span><span class="p">,</span> <span class="n">HoverTool</span>
<span class="kn">from</span> <span class="nn">bokeh.plotting</span> <span class="k">import</span> <span class="n">figure</span>
<span class="kn">from</span> <span class="nn">bokeh.sampledata.autompg</span> <span class="k">import</span> <span class="n">autompg_clean</span> <span class="k">as</span> <span class="n">df</span>
<span class="kn">from</span> <span class="nn">bokeh.transform</span> <span class="k">import</span> <span class="n">factor_cmap</span>

<span class="n">df</span><span class="o">.</span><span class="n">cyl</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">cyl</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">str</span><span class="p">)</span>
<span class="n">df</span><span class="o">.</span><span class="n">yr</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">yr</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="nb">str</span><span class="p">)</span>

<span class="n">group</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="n">by</span><span class="o">=</span><span class="p">[</span><span class="s1">&#39;cyl&#39;</span><span class="p">,</span> <span class="s1">&#39;mfr&#39;</span><span class="p">])</span>
<span class="n">source</span> <span class="o">=</span> <span class="n">ColumnDataSource</span><span class="p">(</span><span class="n">group</span><span class="p">)</span>

<span class="n">p</span> <span class="o">=</span> <span class="n">figure</span><span class="p">(</span><span class="n">plot_width</span><span class="o">=</span><span class="mi">800</span><span class="p">,</span> <span class="n">plot_height</span><span class="o">=</span><span class="mi">500</span><span class="p">,</span> <span class="n">title</span><span class="o">=</span><span class="s2">&quot;Mean MPG by # Cylinders and Manufacturer&quot;</span><span class="p">,</span>
           <span class="n">x_range</span><span class="o">=</span><span class="n">group</span><span class="p">,</span> <span class="n">toolbar_location</span><span class="o">=</span><span class="kc">None</span><span class="p">,</span> <span class="n">tools</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">)</span>

<span class="n">p</span><span class="o">.</span><span class="n">xgrid</span><span class="o">.</span><span class="n">grid_line_color</span> <span class="o">=</span> <span class="kc">None</span>
<span class="n">p</span><span class="o">.</span><span class="n">xaxis</span><span class="o">.</span><span class="n">axis_label</span> <span class="o">=</span> <span class="s2">&quot;Manufacturer grouped by # Cylinders&quot;</span>
<span class="n">p</span><span class="o">.</span><span class="n">xaxis</span><span class="o">.</span><span class="n">major_label_orientation</span> <span class="o">=</span> <span class="mf">1.2</span>

<span class="n">index_cmap</span> <span class="o">=</span> <span class="n">factor_cmap</span><span class="p">(</span><span class="s1">&#39;cyl_mfr&#39;</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="p">[</span><span class="s1">&#39;#2b83ba&#39;</span><span class="p">,</span> <span class="s1">&#39;#abdda4&#39;</span><span class="p">,</span> <span class="s1">&#39;#ffffbf&#39;</span><span class="p">,</span> <span class="s1">&#39;#fdae61&#39;</span><span class="p">,</span> <span class="s1">&#39;#d7191c&#39;</span><span class="p">],</span> 
                         <span class="n">factors</span><span class="o">=</span><span class="nb">sorted</span><span class="p">(</span><span class="n">df</span><span class="o">.</span><span class="n">cyl</span><span class="o">.</span><span class="n">unique</span><span class="p">()),</span> <span class="n">end</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>

<span class="n">p</span><span class="o">.</span><span class="n">vbar</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="s1">&#39;cyl_mfr&#39;</span><span class="p">,</span> <span class="n">top</span><span class="o">=</span><span class="s1">&#39;mpg_mean&#39;</span><span class="p">,</span> <span class="n">width</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="n">source</span><span class="p">,</span>
       <span class="n">line_color</span><span class="o">=</span><span class="s2">&quot;white&quot;</span><span class="p">,</span> <span class="n">fill_color</span><span class="o">=</span><span class="n">index_cmap</span><span class="p">,</span> 
       <span class="n">hover_line_color</span><span class="o">=</span><span class="s2">&quot;darkgrey&quot;</span><span class="p">,</span> <span class="n">hover_fill_color</span><span class="o">=</span><span class="n">index_cmap</span><span class="p">)</span>

<span class="n">p</span><span class="o">.</span><span class="n">add_tools</span><span class="p">(</span><span class="n">HoverTool</span><span class="p">(</span><span class="n">tooltips</span><span class="o">=</span><span class="p">[(</span><span class="s2">&quot;MPG&quot;</span><span class="p">,</span> <span class="s2">&quot;@mpg_mean&quot;</span><span class="p">),</span> <span class="p">(</span><span class="s2">&quot;Cyl, Mfr&quot;</span><span class="p">,</span> <span class="s2">&quot;@cyl_mfr&quot;</span><span class="p">)]))</span>

<span class="n">show</span><span class="p">(</span><span class="n">p</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">

<div class="bk-root">
    <div class="bk-plotdiv" id="ebd32f6b-e3d1-4be4-a1ad-90a0376dd42c"></div>
</div>
</div>

</div>

<div class="output_area">

<div class="prompt"></div>
