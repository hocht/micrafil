# Script para extraer URLs del sitemap
$xml = [xml](Get-Content "dist\sitemap-0.xml")
$xml.urlset.url | ForEach-Object { 
    Write-Output $_.loc 
} | Sort-Object
