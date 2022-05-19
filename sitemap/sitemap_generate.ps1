<# configuration #>
$sitemap_input = "$($PSScriptRoot)\sitemap_sites.json"
$sitemap_output = "$($PSScriptRoot)\..\public\sitemap.xml"

<# initialization (file input) #>
$sitemap_sites = Get-Content -Path $sitemap_input | ConvertFrom-Json

<# convert to xml #>
$sitemap_sites_xml = @()
foreach ($loop_site in $sitemap_sites) {
    $sitemap_sites_xml += "`t<url>`n`t`t<loc>$($loop_site.url)</loc>`n`t`t<changefreq>$($loop_site.change_frequency)</changefreq>`n`t`t<priority>$($loop_site.priority)</priority>`n`t</url>"
}
$sitemap_final = "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n$($sitemap_sites_xml -join "`n")`n</urlset>"

Out-File -FilePath $sitemap_output -Encoding ASCII -InputObject $sitemap_final