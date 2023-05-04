<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <xsl:for-each select="categorias/categoria">

            <div
                class="skills">
                <div class="skillsTopBox">
                    <div class="skillsLogo">
                        <img src="./src/icons/code.svg" />
                    </div>
                    <div class="skillsName">
                        <p>
                            <xsl:value-of select="nombreCat" />
                        </p>
                    </div>
                </div>
                <div class="skillsBotBox">
                    <xsl:for-each select="lenguaje">
                        <xsl:variable name="porcentaje" select="concat('width: ',nivel/text(),';')" />
                        <div
                            class="skill">
                            <div class="skillNameID">
                                <p class="skillNameIDLeft">
                                    <xsl:value-of select="nombre"></xsl:value-of>
                                </p>
                                <p class="skillNameIDRight">
                                    <xsl:value-of select="nivel"></xsl:value-of>
                                </p>
                            </div>
                            <div class="skillBar">
                                <div class="skillBarProg" id="JavaSkill">
                                    <xsl:attribute name="style"><xsl:value-of select="$porcentaje" /></xsl:attribute>
                                </div>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
            </div>
        </xsl:for-each>

    </xsl:template>
</xsl:stylesheet>