<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <xsl:for-each select="projects/project">
            <div class="swiper-slide">
                <div class="slideBox">
                    <div class="slideBoxImg">
                        <img>
                            <xsl:attribute name="src">
                                <xsl:value-of select="urlImg" />
                            </xsl:attribute>
                        </img>
                    </div>
                    <div class="slideBoxDivider"></div>
                    <div class="slideBoxText">
                        <p class="slideTitle">
                            <xsl:value-of select="name"></xsl:value-of>
                        </p>
                        <p class="slideText">
                            <xsl:value-of select="description"></xsl:value-of>
                        </p>
                        <div class="slideButtonBox">
                            <a target="_blank">
                                <xsl:attribute name="href"><xsl:value-of select="urlGithub" /></xsl:attribute>
                                <div class="slideButton">
                                    <img src="./src/icons/browser.svg" />
                                </div>
                            </a>
                            <a target="_blank">
                                <xsl:attribute name="href"><xsl:value-of select="urlSite" /></xsl:attribute>
                                <div class="slideButton">
                                    <img src="./src/icons/github.svg" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>